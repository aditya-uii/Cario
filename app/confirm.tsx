import { View, Text } from "react-native";

export default function ConfirmScreen() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-xl font-bold">Booking Confirmed ✅</Text>
      <Text className="text-zinc-400 mt-2 text-xs">Next we add payment</Text>
    </View>
  );
}
