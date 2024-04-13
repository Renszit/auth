import { Redirect, Stack, router } from "expo-router";
import { useSession } from "../../hooks/useSession";
import { Text } from "react-native";
import { useEffect } from "react";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}
