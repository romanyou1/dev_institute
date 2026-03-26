import React from "react";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <BookOpen size={28} style={{ marginRight: "10px" }} />
        Book Cards
      </h1>
    </header>
  );
}