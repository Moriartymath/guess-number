import { Button, ButtonProps, View } from "react-native";

interface CustomButtonProps extends ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
}

function CustomButton({
  title,
  className = "",
  disabled = false,
  ...props
}: CustomButtonProps) {
  return (
    <View className={"p-2 border-2 border-white" + className}>
      <Button title={title} {...props} disabled={disabled} />
    </View>
  );
}

export default CustomButton;
