import { View, StyleSheet } from "react-native";
import LoginForm from "../modules/login/LoginForm";
import { appColors } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.black,
  },
});

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}
