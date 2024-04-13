import { View, Text, Pressable } from "react-native";
import { useSession } from "../../hooks/useSession";

export default function HomeScreen() {
  const { signOut } = useSession();
  return (
    <View>
      <Text>Welcome Home</Text>
      <Pressable onPress={signOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
}
