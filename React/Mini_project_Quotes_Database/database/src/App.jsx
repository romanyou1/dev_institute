import { useEffect, useMemo, useState } from "react";
import quotes from "./QuotesDatabase";

const COLORS = [
  "#1f6f8b",
  "#7b2cbf",
  "#ef476f",
  "#118ab2",
  "#06d6a0",
  "#f4a261",
  "#e76f51",
  "#264653",
  "#2a9d8f",
  "#3d405b",
];

const getRandomIndex = (length, excludeIndex = null) => {
  if (length <= 1) return 0;

  let nextIndex = Math.floor(Math.random() * length);
  while (nextIndex === excludeIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
};

export default function RandomQuoteGenerator() {
  const [quoteIndex, setQuoteIndex] = useState(() => getRandomIndex(quotes.length));
  const [colorIndex, setColorIndex] = useState(() => getRandomIndex(COLORS.length));

  const currentQuote = useMemo(() => quotes[quoteIndex], [quoteIndex]);
  const currentColor = COLORS[colorIndex];

  const handleNewQuote = () => {
    setQuoteIndex((prev) => getRandomIndex(quotes.length, prev));
    setColorIndex((prev) => getRandomIndex(COLORS.length, prev));
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor = currentColor;
    document.body.style.transition = "background-color 0.4s ease";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [currentColor]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
        backgroundColor: currentColor,
        transition: "background-color 0.4s ease",
      }}
    >
      <div
        style={{
          width: "min(760px, 100%)",
          backgroundColor: "#f4f4f4",
          borderRadius: "12px",
          padding: "28px",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
            color: currentColor,
            transition: "color 0.4s ease",
          }}
        >
          “{currentQuote.quote}”
        </h1>

        <p
          style={{
            marginTop: "24px",
            marginBottom: "32px",
            textAlign: "right",
            fontSize: "1.2rem",
            fontStyle: "italic",
            fontWeight: 700,
            color: currentColor,
            transition: "color 0.4s ease",
          }}
        >
          {currentQuote.author ? `- ${currentQuote.author}` : "- Unknown"}
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={handleNewQuote}
            style={{
              border: "2px solid #1c1c1c",
              borderRadius: "8px",
              padding: "12px 18px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              backgroundColor: currentColor,
              color: "#ffffff",
              transition: "background-color 0.4s ease, transform 0.15s ease",
            }}
            onMouseDown={(event) => {
              event.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(event) => {
              event.currentTarget.style.transform = "scale(1)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "scale(1)";
            }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
