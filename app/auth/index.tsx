import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const sendOtp = () => {
    router.push({ pathname: "/auth/otp", params: { phone } });
  };

  return (
    <View className="flex-1 bg-black px-6 justify-center">
      <Text className="text-white text-3xl font-semibold mb-2">
        Login / Sign up
      </Text>
      <Text className="text-zinc-400 text-sm mb-8">
        Enter your mobile number to receive OTP.
      </Text>

      <View className="flex-row items-center border border-zinc-700 rounded-2xl px-4 py-3 mb-6">
        <Text className="text-white mr-2 text-base">+91</Text>
        <TextInput
          className="flex-1 text-white text-lg"
          placeholder="Enter phone number"
          keyboardType="number-pad"
          maxLength={10}
          placeholderTextColor="#52525b"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity
        className="bg-emerald-400 rounded-full py-4 items-center"
        disabled={phone.length !== 10}
        onPress={sendOtp}
        style={{ opacity: phone.length === 10 ? 1 : 0.5 }}
      >
        <Text className="text-black text-base font-semibold">Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
