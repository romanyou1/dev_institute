import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

function MainContent() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>Theme Switcher</h1>
      <p>The current theme is {theme}.</p>
      <ThemeSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
