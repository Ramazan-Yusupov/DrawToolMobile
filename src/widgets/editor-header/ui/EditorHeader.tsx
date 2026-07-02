import { Text, View } from "react-native";
import { IconButton } from "@/shared/ui";

export function EditorHeader() {
  return (
    <View className="flex-row items-center justify-between border-b border-[#37475D] bg-[#1C2430] px-3 py-2">
      <View className="flex-row min-w-0 flex-1 items-center gap-2">
        <IconButton disabled glyph="☰" label="Projects" />

        <View className="min-w-0 flex-1">
          <Text
            className="text-sm font-semibold text-[#F8FAFC]"
            numberOfLines={1}
          >
            Untitled board
          </Text>
          <Text className="mt-0.5 text-xs text-[#9AACC4]" numberOfLines={1}>
            DrawTool Mobile
          </Text>
        </View>
      </View>

      <View className="ml-3 flex-row items-center gap-1">
        <IconButton disabled glyph="↶" label="Undo" />
        <IconButton disabled glyph="↷" label="Redo" />
        <IconButton disabled glyph="•••" label="More options" />
      </View>
    </View>
  );
}
