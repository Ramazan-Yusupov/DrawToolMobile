export type ToolId =
  | "selection"
  | "pan"
  | "rectangle"
  | "ellipse"
  | "diamond"
  | "arrow"
  | "line"
  | "draw"
  | "text"
  | "sticky"
  | "eraser";

export type ToolItem = {
  glyph: string;
  id: ToolId;
  label: string;
};
