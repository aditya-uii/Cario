import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function AddCarScreen() {
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [city, setCity] = useState("Patna");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");

  const handleSave = () => {
    console.log("New car:", {
      brand,
      model,
      year,
      regNumber,
      city,
      fuel,
      transmission,
      pricePerDay,
    });
    // later: call backend API here
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-950">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity
            className="w-9 h-9 rounded-full bg-zinc-900 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={18} color="#e5e5e5" />
          </TouchableOpacity>
          <Text className="text-sm text-zinc-300 font-medium">
            Add a new car
          </Text>
          <View className="w-9 h-9" />
        </View>

        {/* Form */}
        <View className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
          <Input
            label="Brand"
            placeholder="Hyundai, Maruti, Toyota..."
            value={brand}
            onChangeText={setBrand}
          />
          <Input
            label="Model"
            placeholder="i20 Sportz, Baleno Zeta..."
            value={model}
            onChangeText={setModel}
          />
          <Input
            label="Year"
            placeholder="2021"
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
          />
          <Input
            label="Registration number"
            placeholder="BR 01 AB 1234"
            value={regNumber}
            onChangeText={setRegNumber}
          />
          <Input
            label="City"
            placeholder="Patna"
            value={city}
            onChangeText={setCity}
          />
          <Input
            label="Fuel type"
            placeholder="Petrol, Diesel, CNG..."
            value={fuel}
            onChangeText={setFuel}
          />
          <Input
            label="Transmission"
            placeholder="Manual / Automatic"
            value={transmission}
            onChangeText={setTransmission}
          />
          <Input
            label="Price per day (₹)"
            placeholder="1499"
            keyboardType="numeric"
            value={pricePerDay}
            onChangeText={setPricePerDay}
          />

          <TouchableOpacity
            className="mt-4 w-full bg-emerald-400 rounded-full py-4 items-center justify-center"
            onPress={handleSave}
          >
            <Text className="text-black font-semibold text-sm">
              Save car details
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric";
};

function Input({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}: InputProps) {
  return (
    <View className="mb-3">
      <Text className="text-[11px] text-zinc-400 mb-1">{label}</Text>
      <TextInput
        className="h-11 rounded-2xl bg-zinc-950 border border-zinc-700 px-3 text-sm text-white"
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}
