import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EditorCanvas } from "@/widgets/editor-canvas";
import { EditorHeader } from "@/widgets/editor-header";
import { EditorToolbar } from "@/widgets/editor-toolbar";

export function EditorShell() {
  return (
    <SafeAreaView className="flex-1 bg-[#101722]" edges={["top", "bottom"]}>
      <View className="flex-1 bg-[#101722]">
        <EditorHeader />
        <View className="flex-1">
          <EditorCanvas />
          <EditorToolbar />
        </View>
      </View>
    </SafeAreaView>
  );
}
