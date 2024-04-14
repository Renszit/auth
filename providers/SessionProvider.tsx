import "react-native-get-random-values";

import { AuthContext } from "./context/Auth";
import { useStorageState } from "../hooks/useStorageState";
import { FieldValues } from "react-hook-form";
import * as SecureKeyStore from "expo-secure-store";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { router } from "expo-router";

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  const loginUser = async (data: FieldValues) => {
    let uuid = uuidv4();
    let fetchUUID = await SecureKeyStore.getItemAsync("secure_uuid");

    if (fetchUUID) {
      uuid = fetchUUID;
    }

    await SecureKeyStore.setItemAsync("secure_uuid", uuid);

    let loginData = {
      email: data.email,
      password: data.password,
      device_id: uuid,
    };

    axios
      .post("https://testapp.teechr.de/app/login", loginData)
      .then(({ data }) => {
        if (data.token) {
          console.log(data.token);
          setSession(data.token);
          router.push("/");
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: (data: FieldValues) => {
          loginUser(data);
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
