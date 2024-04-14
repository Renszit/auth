import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSession } from "../../hooks/useSession";
import CustomButton from "../../components/CustomButton";
import { appColors } from "../../constants/theme";

export default function HomeScreen() {
  const { signOut } = useSession();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: appColors.black,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: appColors.white,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <CustomButton label="Sign Out" onPress={signOut} />
    </View>
  );
}
