import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { appColors } from "../constants/theme";

interface CustomButtonProps extends PressableProps {
  label: string;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.primary,
    padding: 10,
    minWidth: 200,
    borderRadius: 10,
    margin: 10,
  },
  label: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default CustomButton;
