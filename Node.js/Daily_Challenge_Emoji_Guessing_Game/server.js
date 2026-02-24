const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Emoji dataset (add more!) ----
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🏖️", name: "Beach" },
  { emoji: "🔥", name: "Fire" },
  { emoji: "🌈", name: "Rainbow" },
  { emoji: "🎉", name: "Party" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "⚽", name: "Soccer" },
  { emoji: "🧠", name: "Brain" },
  { emoji: "👑", name: "Crown" },
  { emoji: "🍦", name: "Ice Cream" },
];

// ---- In-memory game state ----
// players[playerName] = { score, currentRoundId, currentAnswer }
const players = Object.create(null);

// leaderboard entries: { name, score, updatedAt }
const leaderboard = [];

// ---- Helpers ----
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sampleUnique(arr, count, excludeValue = null) {
  const pool = excludeValue ? arr.filter((x) => x !== excludeValue) : [...arr];
  const result = [];
  while (result.length < count && pool.length > 0) {
    const idx = getRandomInt(pool.length);
    result.push(pool.splice(idx, 1)[0]);
  }
  return result;
}

function makeQuestion(optionsCount = 4) {
  const correct = emojis[getRandomInt(emojis.length)];
  const allNames = emojis.map((e) => e.name);

  const distractorsNeeded = Math.max(0, optionsCount - 1);
  const distractors = sampleUnique(allNames, distractorsNeeded, correct.name);

  const options = [correct.name, ...distractors];

  // shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return { emoji: correct.emoji, answer: correct.name, options };
}

function ensurePlayer(name) {
  const cleaned = String(name || "").trim();
  if (!cleaned) return null;

  if (!players[cleaned]) {
    players[cleaned] = { score: 0, currentRoundId: null, currentAnswer: null };
  }
  return cleaned;
}

function upsertLeaderboard(name, score) {
  const now = Date.now();
  const existing = leaderboard.find((x) => x.name === name);
  if (existing) {
    existing.score = score;
    existing.updatedAt = now;
  } else {
    leaderboard.push({ name, score, updatedAt: now });
  }

  leaderboard.sort((a, b) => b.score - a.score || a.updatedAt - b.updatedAt);
  // keep top 10
  if (leaderboard.length > 10) leaderboard.length = 10;
}

// ---- Frontend (served from Express) ----
app.get("/", (req, res) => {
  res.type("html").send(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Emoji Guessing Game</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; max-width: 720px; margin: 40px auto; padding: 0 16px; }
    .card { border: 1px solid #ddd; border-radius: 12px; padding: 16px; margin: 16px 0; }
    .emoji { font-size: 72px; margin: 10px 0; }
    .row { display: flex; gap: 10px; flex-wrap: wrap; }
    button { padding: 10px 12px; border-radius: 10px; border: 1px solid #ccc; cursor: pointer; background: #fff; }
    button:hover { background: #f5f5f5; }
    input { padding: 10px 12px; border-radius: 10px; border: 1px solid #ccc; width: 260px; }
    .feedback { font-weight: 600; }
    .muted { color: #666; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; border-bottom: 1px solid #eee; padding: 8px; }
  </style>
</head>
<body>
  <h1>😄 Emoji Guessing Game</h1>
  <p class="muted">Type your name, then guess the emoji!</p>

  <div class="card">
    <div class="row">
      <input id="playerName" placeholder="Your name (e.g., Roman)" />
      <button id="startBtn">Start / Restart</button>
    </div>
    <p id="scoreLine" class="muted">Score: 0</p>
  </div>

  <div class="card">
    <div id="emoji" class="emoji">❓</div>
    <form id="guessForm">
      <div id="options" class="row"></div>
    </form>
    <p id="feedback" class="feedback"></p>
    <p class="muted" id="hint"></p>
    <div class="row">
      <button id="nextBtn" type="button">Next Emoji</button>
      <button id="hintBtn" type="button">Hint</button>
    </div>
  </div>

  <div class="card">
    <h2>🏆 Leaderboard (Top 10)</h2>
    <div id="leaderboard"></div>
  </div>

<script>
  let currentRoundId = null;
  let currentOptions = [];
  let currentPlayer = "";

  const $ = (id) => document.getElementById(id);

  function setFeedback(text) { $("feedback").textContent = text; }
  function setHint(text) { $("hint").textContent = text; }
  function setScore(score) { $("scoreLine").textContent = "Score: " + score; }

  async function fetchLeaderboard() {
    const res = await fetch("/api/leaderboard");
    const data = await res.json();
    renderLeaderboard(data);
  }

  function renderLeaderboard(entries) {
    if (!entries.length) {
      $("leaderboard").innerHTML = "<p class='muted'>No scores yet. Be the first!</p>";
      return;
    }
    const rows = entries.map((e, i) =>
      "<tr><td>" + (i+1) + "</td><td>" + e.name + "</td><td>" + e.score + "</td></tr>"
    ).join("");
    $("leaderboard").innerHTML =
      "<table><thead><tr><th>#</th><th>Name</th><th>Score</th></tr></thead><tbody>" + rows + "</tbody></table>";
  }

  async function newQuestion() {
    if (!currentPlayer) {
      setFeedback("Enter your name and click Start.");
      return;
    }

    setFeedback("");
    setHint("");

    const res = await fetch("/api/question?player=" + encodeURIComponent(currentPlayer));
    const data = await res.json();

    if (data.error) {
      setFeedback(data.error);
      return;
    }

    currentRoundId = data.roundId;
    currentOptions = data.options;

    $("emoji").textContent = data.emoji;
    setScore(data.score);

    const optionsDiv = $("options");
    optionsDiv.innerHTML = "";

    currentOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "submit";
      btn.textContent = opt;
      btn.dataset.value = opt;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        submitGuess(opt);
      });
      optionsDiv.appendChild(btn);
    });

    await fetchLeaderboard();
  }

  async function submitGuess(guess) {
    if (!currentRoundId) return;

    const res = await fetch("/api/guess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player: currentPlayer,
        roundId: currentRoundId,
        guess
      })
    });

    const data = await res.json();

    if (data.error) {
      setFeedback(data.error);
      return;
    }

    setScore(data.score);

    if (data.correct) {
      setFeedback("✅ Correct! +" + data.points + " point");
    } else {
      setFeedback("❌ Nope! Correct answer: " + data.answer);
    }

    await fetchLeaderboard();
  }

  async function requestHint() {
    if (!currentPlayer || !currentRoundId) return;
    const res = await fetch("/api/hint?player=" + encodeURIComponent(currentPlayer));
    const data = await res.json();
    if (data.hint) setHint("Hint: " + data.hint);
  }

  $("startBtn").addEventListener("click", async () => {
    const name = $("playerName").value.trim();
    if (!name) {
      setFeedback("Please enter a name first.");
      return;
    }
    currentPlayer = name;
    setFeedback("Game started for " + currentPlayer + "!");
    await newQuestion();
  });

  $("nextBtn").addEventListener("click", async () => {
    await newQuestion();
  });

  $("hintBtn").addEventListener("click", requestHint);

  // initial load
  fetchLeaderboard();
</script>
</body>
</html>`);
});

// ---- API: get a new question ----
app.get("/api/question", (req, res) => {
  const player = ensurePlayer(req.query.player);
  if (!player) return res.status(400).json({ error: "Player name is required" });

  const q = makeQuestion(4);
  const roundId = crypto.randomUUID();

  players[player].currentRoundId = roundId;
  players[player].currentAnswer = q.answer;

  console.log(`🎲 New question for ${player}: ${q.emoji} (answer: ${q.answer})`);

  res.json({
    roundId,
    emoji: q.emoji,
    options: q.options,
    score: players[player].score,
  });
});

// ---- API: submit a guess ----
app.post("/api/guess", (req, res) => {
  const player = ensurePlayer(req.body.player);
  const { roundId, guess } = req.body;

  if (!player) return res.status(400).json({ error: "Player name is required" });
  if (!roundId || !guess) return res.status(400).json({ error: "roundId and guess are required" });

  const state = players[player];
  if (!state.currentRoundId || state.currentRoundId !== roundId) {
    return res.status(400).json({ error: "This round is not active. Click Next Emoji." });
  }

  const answer = state.currentAnswer;
  const correct = String(guess).trim() === answer;

  let points = 0;
  if (correct) {
    points = 1;
    state.score += points;
  }

  // round consumed (force next question)
  state.currentRoundId = null;
  state.currentAnswer = null;

  upsertLeaderboard(player, state.score);

  console.log(`📝 ${player} guessed "${guess}" -> ${correct ? "CORRECT" : "WRONG"} | score=${state.score}`);

  res.json({
    correct,
    points,
    answer,
    score: state.score,
  });
});

// ---- API: hint ----
app.get("/api/hint", (req, res) => {
  const player = ensurePlayer(req.query.player);
  if (!player) return res.status(400).json({ error: "Player name is required" });

  const state = players[player];
  if (!state.currentAnswer) return res.status(400).json({ error: "No active question. Click Next Emoji." });

  const ans = state.currentAnswer;

  // Simple hint: first letter + length
  const hint = `${ans[0]}... (${ans.length} letters)`;
  res.json({ hint });
});

// ---- API: leaderboard ----
app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

// ---- 404 for invalid routes ----
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ---- error handler ----
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Emoji Game running at http://localhost:${PORT}`);
});