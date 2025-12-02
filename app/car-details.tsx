import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function CarDetailsScreen() {
  const router = useRouter();
  const { name, type, price, location, rating } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950">
      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Back Button */}
        <View className="flex-row items-center justify-between mt-2 mb-4">
          <TouchableOpacity
            className="w-9 h-9 rounded-full bg-zinc-900 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={20} />
          </TouchableOpacity>
          <Text className="text-sm text-zinc-300 font-medium">Car details</Text>
          <View className="w-9 h-9" />
        </View>

        {/* Car Info Card */}
        <View className="bg-zinc-900 rounded-3xl p-4 items-center">
          <Text className="text-xs text-zinc-400">{location}</Text>
          <Text className="text-xl text-white font-bold mt-1">{name}</Text>
          <Text className="text-[12px] text-zinc-500 mt-1">{type}</Text>

          {/* Car Image */}
          <Image
            source={require("../assets/images/hero-car.jpeg")}
            className="w-full h-48 mt-4"
            resizeMode="contain"
          />

          {/* Rating */}
          <View className="flex-row items-center mt-3">
            <Ionicons name="star" size={16} />
<Text className="text-xs text-white ml-1">{rating} · (0 trips)</Text>

          </View>
        </View>

        {/* Specs */}
        <View className="flex-row flex-wrap gap-2 mt-5">
          <View className="px-3 py-2 rounded-full bg-zinc-900"><Text className="text-xs text-white">5 Seats</Text></View>
          <View className="px-3 py-2 rounded-full bg-zinc-900"><Text className="text-xs text-white">Petrol</Text></View>
          <View className="px-3 py-2 rounded-full bg-zinc-900"><Text className="text-xs text-white">Manual</Text></View>
          <View className="px-3 py-2 rounded-full bg-zinc-900"><Text className="text-xs text-white">AC</Text></View>
          <View className="px-3 py-2 rounded-full bg-zinc-900"><Text className="text-xs text-white">300 km/day free</Text></View>
        </View>

        {/* Pricing */}
        <View className="mt-6 bg-zinc-900 rounded-3xl p-4">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-xs text-zinc-400">Estimated fare</Text>
              <Text className="text-2xl text-white font-bold">₹{price} / day</Text>
              <Text className="text-xs text-zinc-500 mt-1">Taxes extra · Fuel not included</Text>
            </View>
            <View className="items-end">
              <Text className="text-[11px] text-emerald-400">Free cancellation · 24 hrs</Text>
              <Text className="text-[11px] text-zinc-500 mt-1">20% advance to confirm</Text>
            </View>
          </View>
        </View>

      </ScrollView>

{/* Sticky Book Button */}
<View className="bg-neutral-950 border-t border-zinc-900 px-5 py-4">
  <View className="flex-row justify-between items-center">
    <View>
      <Text className="text-xs text-zinc-400">Estimated fare</Text>
      <Text className="text-xl font-bold text-white">₹{price}</Text>
      <Text className="text-[11px] text-zinc-500 mt-1">For selected package</Text>
    </View>

    {/* Continue to booking button */}
    <TouchableOpacity
      className="bg-emerald-400 h-11 px-7 rounded-full items-center justify-center"
      onPress={() =>
        router.push({
          pathname: "/booking",
          params: { name, price, location },
        })
      }
    >
      <Text className="text-black text-sm font-semibold">Continue</Text>
    </TouchableOpacity>
  </View>
</View>


    </SafeAreaView>
  );
}
