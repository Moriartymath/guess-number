import { Button, ButtonProps, View } from "react-native";

interface CustomButtonProps extends ButtonProps {
  title: string;
  classContainer?: string;
  disabled?: boolean;
}

function CustomButton({
  title,
  classContainer = "",
  disabled = false,
  ...props
}: CustomButtonProps) {
  return (
    <View className={"p-2 border-2 border-white" + " " + classContainer}>
      <Button title={title} color={"white"} {...props} disabled={disabled} />
    </View>
  );
}

export default CustomButton;
