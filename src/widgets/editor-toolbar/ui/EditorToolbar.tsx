import { ScrollView, View } from "react-native";
import { TOOL_ITEMS, toolStore, useActiveTool } from "@/entities/tool";
import { ToolButton } from "./ToolButton";

export function EditorToolbar() {
  const activeTool = useActiveTool();

  return (
    <View className="absolute bottom-3 left-3 right-3 overflow-hidden rounded-2xl border border-[#37475D] bg-[#1C2430]">
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 6,
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {TOOL_ITEMS.map((item) => (
          <ToolButton
            isActive={activeTool === item.id}
            item={item}
            key={item.id}
            onPress={() => toolStore.set(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
