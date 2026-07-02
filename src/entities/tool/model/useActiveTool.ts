import { useSyncExternalStore } from "react";
import { toolStore } from "./toolStore";

export function useActiveTool() {
  return useSyncExternalStore(
    toolStore.subscribe,
    toolStore.getSnapshot,
    toolStore.getSnapshot,
  );
}
