import type { PressableProps } from "react-native";
import { Pressable, Text } from "react-native";
import { cn } from "@/shared/lib";

type IconButtonProps = Omit<PressableProps, "children"> & {
  className?: string;
  glyph: string;
  label: string;
};

export function IconButton({
  accessibilityLabel,
  className,
  disabled,
  glyph,
  label,
  ...props
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityRole="button"
      className={cn(
        "h-10 w-10 items-center justify-center rounded-xl border border-transparent",
        disabled
          ? "opacity-35"
          : "bg-[#273243] active:border-[#5B9DF6] active:bg-[#314A70]",
        className,
      )}
      disabled={disabled}
      hitSlop={8}
      {...props}
    >
      <Text
        allowFontScaling={false}
        className="text-lg font-semibold text-[#F8FAFC]"
      >
        {glyph}
      </Text>
    </Pressable>
  );
}
