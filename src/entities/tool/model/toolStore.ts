import type { ToolId } from "./types";

type Listener = () => void;

let activeTool: ToolId = "selection";
const listeners = new Set<Listener>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

export const toolStore = {
  getSnapshot: () => activeTool,
  set: (nextTool: ToolId) => {
    if (activeTool === nextTool) {
      return;
    }

    activeTool = nextTool;
    emitChange();
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  },
};
