import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-black px-6 justify-center items-center">
      
      <View className="w-16 h-16 bg-emerald-400 items-center justify-center rounded-full mb-6">
        <Ionicons name="checkmark" size={40} color="black" />
      </View>

      <Text className="text-white text-2xl font-bold mb-2">Payment Successful!</Text>
      <Text className="text-zinc-400 text-xs text-center mb-8 px-5">
        Your car has been booked and added to your My Trips section.
      </Text>

      <TouchableOpacity
        onPress={() => router.replace("/home")}
        className="bg-emerald-400 px-7 py-4 rounded-full"
      >
        <Text className="text-black font-bold text-sm">Go to Home</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
