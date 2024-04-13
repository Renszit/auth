// Import necessary modules
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { useSession } from "../../hooks/useSession";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
  },
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useSession();

  return (
    <View>
      {/* Username Input */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && <Text>This field is required.</Text>}

      {/* Password Input */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.password && <Text>This field is required.</Text>}

      {/* Submit Button */}
      <Pressable onPress={handleSubmit(signIn)}>
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
