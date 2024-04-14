import "react-native-get-random-values";

import { AuthContext } from "./context/Auth";
import { useStorageState } from "../hooks/useStorageState";
import { FieldValues } from "react-hook-form";
import * as SecureKeyStore from "expo-secure-store";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (data: FieldValues) => {
    // set custom uuid for device, since ios does not provide a unique id, this is a workaround
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
    setError(null);

    axios
      .post("https://testapp.teechr.de/app/login", loginData)
      .then(({ data }) => {
        if (data.error) {
          setError(data.error.messages[0]);
        }
        if (data.token) {
          setSession(data.token);
          router.push("/");
        }
      })
      .catch(() => {
        setError("An error occurred, please try again later.");
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
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
