const express = require("express");
const crypto = require("crypto");

const router = express.Router();

// Hard-coded questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// In-memory game state per user session
// sessions[sessionId] = { index: number, score: number, done: boolean }
const sessions = Object.create(null);

// --- Helpers (simple cookie handling, no extra dependencies) ---
function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(";").forEach((part) => {
    const [k, ...v] = part.trim().split("=");
    cookies[k] = decodeURIComponent(v.join("="));
  });
  return cookies;
}

function getOrCreateSession(req, res) {
  const cookies = parseCookies(req.headers.cookie);
  let sid = cookies.sid;

  if (!sid || !sessions[sid]) {
    sid = crypto.randomUUID();
    sessions[sid] = { index: 0, score: 0, done: false };
    // basic cookie (good enough for this exercise)
    res.setHeader("Set-Cookie", `sid=${encodeURIComponent(sid)}; Path=/; HttpOnly`);
  }

  return { sid, state: sessions[sid] };
}

function normalize(s) {
  return String(s || "").trim().toLowerCase();
}

// --- Routes ---
// GET /quiz: Start or continue quiz; show current question
router.get("/quiz", (req, res) => {
  const { state } = getOrCreateSession(req, res);

  if (state.done || state.index >= triviaQuestions.length) {
    state.done = true;
    return res.redirect("/quiz/score");
  }

  const current = triviaQuestions[state.index];

  // Simple HTML form (works in browser)
  res.type("html").send(`
    <h1>Trivia Quiz</h1>
    <p><strong>Question ${state.index + 1} of ${triviaQuestions.length}:</strong></p>
    <p>${current.question}</p>

    <form method="POST" action="/quiz">
      <input name="answer" placeholder="Type your answer" autofocus />
      <button type="submit">Submit</button>
    </form>

    <p>Current score: ${state.score}</p>
  `);
});

// POST /quiz: submit answer, feedback, move to next question
router.post("/quiz", (req, res) => {
  const { state } = getOrCreateSession(req, res);

  if (state.done || state.index >= triviaQuestions.length) {
    state.done = true;
    return res.redirect("/quiz/score");
  }

  const userAnswer = req.body.answer;
  const current = triviaQuestions[state.index];

  const correct = normalize(userAnswer) === normalize(current.answer);
  if (correct) state.score += 1;

  const feedback = correct
    ? `Correct!`
    : `Incorrect. The correct answer was: <strong>${current.answer}</strong>`;

  // advance to next question
  state.index += 1;

  // if finished, go to score page
  if (state.index >= triviaQuestions.length) {
    state.done = true;
    return res.type("html").send(`
      <h1>Trivia Quiz</h1>
      <p>${feedback}</p>
      <p>You’ve completed the quiz!</p>
      <a href="/quiz/score">See your final score →</a>
    `);
  }

  // otherwise show feedback + link to next
  res.type("html").send(`
    <h1>Trivia Quiz</h1>
    <p>${feedback}</p>
    <p>Score: ${state.score}</p>
    <a href="/quiz">Next question →</a>
  `);
});

// GET /quiz/score: final score
router.get("/quiz/score", (req, res) => {
  const { sid, state } = getOrCreateSession(req, res);

  const total = triviaQuestions.length;

  res.type("html").send(`
    <h1>🏁 Final Score</h1>
    <p>You scored <strong>${state.score}</strong> out of <strong>${total}</strong>.</p>

    <form method="POST" action="/quiz/reset">
      <button type="submit">Play again</button>
    </form>
  `);
});

// Optional: reset route to restart quiz
router.post("/quiz/reset", (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  const sid = cookies.sid;

  if (sid && sessions[sid]) {
    sessions[sid] = { index: 0, score: 0, done: false };
  }
  res.redirect("/quiz");
});

module.exports = router;