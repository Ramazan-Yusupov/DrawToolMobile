import { useMemo } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { TOOL_ITEMS, useActiveTool } from "@/entities/tool";
import { colors } from "@/shared/config/theme";

const GRID_SIZE = 40;

function getActiveToolLabel(toolId: string) {
  return TOOL_ITEMS.find((tool) => tool.id === toolId)?.label ?? "Select";
}

export function EditorCanvas() {
  const activeTool = useActiveTool();
  const { height, width } = useWindowDimensions();

  const verticalLines = useMemo(
    () => Array.from({ length: Math.ceil(width / GRID_SIZE) + 1 }),
    [width],
  );
  const horizontalLines = useMemo(
    () => Array.from({ length: Math.ceil(height / GRID_SIZE) + 1 }),
    [height],
  );

  return (
    <View className="flex-1 overflow-hidden bg-[#101722]">
      <View className="absolute inset-0" pointerEvents="none">
        {verticalLines.map((_, index) => (
          <View
            key={`vertical-grid-line-${index}`}
            style={{
              backgroundColor: "rgba(91, 157, 246, 0.08)",
              height: "100%",
              left: index * GRID_SIZE,
              position: "absolute",
              top: 0,
              width: 1,
            }}
          />
        ))}

        {horizontalLines.map((_, index) => (
          <View
            key={`horizontal-grid-line-${index}`}
            style={{
              backgroundColor: "rgba(91, 157, 246, 0.08)",
              height: 1,
              left: 0,
              position: "absolute",
              top: index * GRID_SIZE,
              width: "100%",
            }}
          />
        ))}
      </View>

      <View className="absolute left-3 top-3 flex-row items-center rounded-xl border border-[#37475D] bg-[#1C2430] px-3 py-2">
        <Text className="text-xs font-semibold text-[#F8FAFC]">100%</Text>
        <View className="mx-2 h-3 w-px bg-[#37475D]" />
        <Text className="text-xs text-[#9AACC4]">
          {getActiveToolLabel(activeTool)}
        </Text>
      </View>

      <View
        className="absolute left-0 right-0 items-center"
        pointerEvents="none"
        style={{ top: "42%" }}
      >
        <View
          className="rounded-2xl border border-[#37475D] bg-[#1C2430] px-4 py-3"
          style={{ maxWidth: 260 }}
        >
          <Text className="text-center text-sm font-semibold text-[#F8FAFC]">
            Your infinite canvas is ready
          </Text>
          <Text className="mt-1 text-center text-xs leading-5 text-[#9AACC4]">
            Choose a tool below. Drawing gestures arrive in the next stage.
          </Text>
        </View>
      </View>

      <View
        className="absolute h-2.5 w-2.5 rounded-full"
        pointerEvents="none"
        style={{
          backgroundColor: colors.accent,
          left: "50%",
          marginLeft: -5,
          marginTop: -5,
          shadowColor: colors.accent,
          shadowOpacity: 0.7,
          shadowRadius: 8,
          top: "50%",
        }}
      />
    </View>
  );
}
