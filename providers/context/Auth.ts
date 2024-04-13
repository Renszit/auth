import React from "react";
import { FieldValues } from "react-hook-form";

export const AuthContext = React.createContext<{
    signIn: (data: FieldValues) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
  }>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
  });
  