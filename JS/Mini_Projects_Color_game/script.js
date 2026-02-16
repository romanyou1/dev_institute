// --------- CONFIG ----------
const COLORS = [
  "#000000",
  "#808080",
  "#ffffff",
  "#ff0000",
  "#ff7a00",
  "#ffd400",
  "#00c853",
  "#00bcd4",
  "#2962ff",
  "#7c4dff",
  "#d500f9",
  "#ff4081",
  "#795548",
  "#a1887f",
  "#c0ca33",
  "#1de9b6",
];

// --------- DOM ----------
const paletteEl = document.getElementById("palette");
const boardEl = document.getElementById("board");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const sizeSelect = document.getElementById("size");
const swatchEl = document.getElementById("swatch");
const colorNameEl = document.getElementById("colorName");

// --------- STATE ----------
let selectedColor = "#000000";
let isMouseDown = false;

// --------- HELPERS ----------
function setCurrentColor(color, label = null) {
  selectedColor = color;
  swatchEl.style.background = color;
  colorNameEl.textContent = label ?? color.toUpperCase();

  document.querySelectorAll(".color").forEach((c) => {
    c.classList.toggle("selected", c.dataset.color === color);
  });
}

function paintCell(cell) {
  cell.style.background = selectedColor;
}

function buildPalette() {
  paletteEl.innerHTML = "";
  COLORS.forEach((color) => {
    const div = document.createElement("div");
    div.className = "color";
    div.style.background = color;
    div.dataset.color = color;

    div.addEventListener("click", () => setCurrentColor(color));
    paletteEl.appendChild(div);
  });

  // default selected
  setCurrentColor(selectedColor, "Black");
}

function buildBoard(n) {
  boardEl.innerHTML = "";
  boardEl.style.gridTemplateColumns = `repeat(${n}, var(--cell-size))`;
  boardEl.style.gridTemplateRows = `repeat(${n}, var(--cell-size))`;

  const total = n * n;

  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    cell.addEventListener("mousedown", () => paintCell(cell));
    cell.addEventListener("mouseover", () => {
      if (isMouseDown) paintCell(cell);
    });

    boardEl.appendChild(cell);
  }
}

// --------- EVENTS ----------
document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.background = "white";
  });
});

eraserBtn.addEventListener("click", () => {
  setCurrentColor("#ffffff", "Eraser");
});

sizeSelect.addEventListener("change", () => {
  buildBoard(Number(sizeSelect.value));
});

boardEl.addEventListener("dragstart", (e) => e.preventDefault());

// --------- INIT ----------
buildPalette();
buildBoard(Number(sizeSelect.value));