import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { useSession } from "../../hooks/useSession";
import { appColors } from "../../constants/theme";
import CustomButton from "../../components/CustomButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    color: appColors.text,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: appColors.secondary,
  },
  error: {
    color: "red",
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
    <View style={styles.container}>
      {/* Username Input */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            placeholderTextColor={appColors.text}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && (
        <Text style={styles.error}>This field is required.</Text>
      )}

      {/* Password Input */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={appColors.text}
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
      {errors.password && (
        <Text style={styles.error}>This field is required.</Text>
      )}

      {/* Submit Button */}
      <CustomButton label="Submit" onPress={handleSubmit(signIn)} />
    </View>
  );
};

export default LoginForm;
