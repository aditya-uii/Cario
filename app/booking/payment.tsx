import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"; // ✅ added ScrollView here
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";


export default function PaymentScreen() {
  const router = useRouter();
  const { name, price } = useLocalSearchParams();
  const [method, setMethod] = useState<"UPI" | "Card" | "Wallet">("UPI");
  const [input, setInput] = useState("");

  const handlePay = () => {
    router.push("/booking/payment-success");
  };

  const MethodBtn = ({ m }: { m: "UPI" | "Card" | "Wallet" }) => (
    <TouchableOpacity
      onPress={() => {
        setMethod(m);
        setInput("");
      }}
      className={`flex-row items-center border px-4 py-3 rounded-xl mb-3 ${
        method === m ? "bg-emerald-400 border-emerald-400" : "bg-zinc-900 border-zinc-800"
      }`}
    >
      <Ionicons name={m === "UPI" ? "phone-portrait-outline" : m === "Wallet" ? "wallet-outline" : "card-outline"} size={18} color={method === m ? "#000" : "#fff"} />
      <Text className={`ml-3 font-semibold ${method === m ? "text-black" : "text-zinc-300"}`}>{m}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-neutral-950 px-5">

      {/* Header */}
      <View className="flex-row items-center mt-4 mb-6">
        <TouchableOpacity onPress={() => router.back()} className="w-9 h-9 rounded-full bg-zinc-900 items-center justify-center">
          <Ionicons name="chevron-back" size={18} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-lg font-semibold ml-3 flex-1">Payment</Text>
      </View>

      {/* Price Summary */}
      <View className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800 mb-5">
        <Text className="text-zinc-400 text-xs mb-1">You are booking:</Text>
        <Text className="text-white text-lg font-bold">{name}</Text>
        <Text className="text-zinc-500 text-[11px] mt-1">Total payable</Text>
        <Text className="text-emerald-400 text-3xl font-extrabold mt-2">₹{price}</Text>
      </View>

      {/* Payment Methods */}
      <Text className="text-white text-sm font-semibold mb-3">Choose payment method</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <MethodBtn m="UPI" />
          <MethodBtn m="Card" />
          <MethodBtn m="Wallet" />
        </View>

        {/* Inputs based on method */}
        <View className="mt-2">
          <Text className="text-[11px] text-zinc-400 mb-1">
            {method === "UPI" ? "Enter UPI ID" : method === "Card" ? "Enter Card Number" : "Owner wallet reference"}
          </Text>

          <TextInput
            className="bg-black border border-zinc-700 px-4 py-3 rounded-2xl text-white text-sm text-center mb-4"
            placeholder={method === "UPI" ? "example@upi" : "XXXX XXXX XXXX XXXX"}
            placeholderTextColor="#52525b"
            keyboardType={method === "Card" ? "numeric" : "default"}
            value={input}
            onChangeText={setInput}
            maxLength={method === "Card" ? 19 : 30}
          />
        </View>

        {/* Pay Button */}
        <TouchableOpacity onPress={handlePay} className="bg-emerald-400 rounded-full py-4 items-center justify-center mt-4">
          <Text className="text-black text-sm font-bold">Pay ₹{price}</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
}
