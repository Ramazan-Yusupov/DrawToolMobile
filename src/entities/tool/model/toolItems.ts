import type { ToolItem } from "./types";

export const TOOL_ITEMS: readonly ToolItem[] = [
  { id: "selection", label: "Select", glyph: "↖" },
  { id: "pan", label: "Pan", glyph: "✥" },
  { id: "rectangle", label: "Rectangle", glyph: "□" },
  { id: "ellipse", label: "Ellipse", glyph: "○" },
  { id: "diamond", label: "Diamond", glyph: "◇" },
  { id: "arrow", label: "Arrow", glyph: "↗" },
  { id: "line", label: "Line", glyph: "╱" },
  { id: "draw", label: "Draw", glyph: "∿" },
  { id: "text", label: "Text", glyph: "T" },
  { id: "sticky", label: "Sticky", glyph: "▤" },
  { id: "eraser", label: "Eraser", glyph: "⌫" },
];
