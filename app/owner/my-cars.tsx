import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const cars = [
  {
    id: "1",
    name: "Hyundai i20 Sportz",
    reg: "BR 01 AB 1234",
    city: "Patna",
    status: "Active",
  },
  {
    id: "2",
    name: "Toyota Innova Crysta",
    reg: "BR 02 CD 5678",
    city: "Patna",
    status: "Active",
  },
  {
    id: "3",
    name: "Maruti Baleno Zeta",
    reg: "BR 03 EF 9012",
    city: "Patna",
    status: "Inactive",
  },
];

export default function MyCarsScreen() {
  const router = useRouter();

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
            Your cars
          </Text>
          <View className="w-9 h-9" />
        </View>

        {cars.map((car) => (
          <View
            key={car.id}
            className="mb-3 rounded-2xl bg-zinc-900 p-4 border border-zinc-800"
          >
            <View className="flex-row items-center justify-between mb-2">
              <View>
                <Text className="text-[13px] text-white font-semibold">
                  {car.name}
                </Text>
                <Text className="text-[11px] text-zinc-500 mt-1">
                  {car.reg} · {car.city}
                </Text>
              </View>
              <View
                className={`px-2 py-1 rounded-full ${
                  car.status === "Active"
                    ? "bg-emerald-500/10 border border-emerald-500/50"
                    : "bg-zinc-800 border border-zinc-700"
                }`}
              >
                <Text
                  className={`text-[10px] font-medium ${
                    car.status === "Active"
                      ? "text-emerald-400"
                      : "text-zinc-300"
                  }`}
                >
                  {car.status}
                </Text>
              </View>
            </View>

            <View className="flex-row mt-2">
              <TouchableOpacity className="px-3 py-1 rounded-full bg-zinc-800 mr-2">
                <Text className="text-[10px] text-zinc-200">Edit details</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-3 py-1 rounded-full bg-zinc-800">
                <Text className="text-[10px] text-zinc-200">
                  View bookings
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
