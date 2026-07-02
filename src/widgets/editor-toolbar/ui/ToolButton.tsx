import { Pressable, Text } from "react-native";
import type { ToolItem } from "@/entities/tool";
import { cn } from "@/shared/lib";

type ToolButtonProps = {
  isActive: boolean;
  item: ToolItem;
  onPress: () => void;
};

export function ToolButton({ isActive, item, onPress }: ToolButtonProps) {
  return (
    <Pressable
      accessibilityLabel={`Use ${item.label} tool`}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      className={cn(
        "h-14 w-[68px] items-center justify-center rounded-xl border",
        isActive
          ? "border-[#5B9DF6] bg-[#314A70]"
          : "border-transparent bg-transparent active:bg-[#273243]",
      )}
      hitSlop={4}
      onPress={onPress}
    >
      <Text
        allowFontScaling={false}
        className={cn(
          "text-lg font-semibold",
          isActive ? "text-[#F8FAFC]" : "text-[#9AACC4]",
        )}
      >
        {item.glyph}
      </Text>
      <Text
        allowFontScaling={false}
        className={cn(
          "mt-0.5 text-[10px] font-medium",
          isActive ? "text-[#F8FAFC]" : "text-[#9AACC4]",
        )}
        numberOfLines={1}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}
