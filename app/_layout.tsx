import { Slot } from "expo-router";
import { SessionProvider } from "../providers/SessionProvider";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
