import AddressView from "@/components/AddressView";
import { spacing } from "@/themes";
import { View } from "react-native";

export default function Ordena() {
  return (
    <View style={[spacing.safeArea, spacing.safeStatusBar]}>
      <AddressView />
    </View>
  );
}
