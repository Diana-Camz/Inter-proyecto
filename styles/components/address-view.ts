import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const addressViewStyles = StyleSheet.create({
  container: {
    height: 137,
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    flex: 1,
  },
  addressViewImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  dataContainer: {
    justifyContent: "space-around",
    flex: 1,
  },
  addressView: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMargin: { marginTop: 3 },
});
