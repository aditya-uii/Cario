// app/(tabs)/trips.tsx
import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const upcomingTrips = [
  {
    id: "1",
    city: "Patna → Ranchi",
    car: "Hyundai i20 · Petrol · Manual",
    date: "2 Dec · 09:00 AM",
    returnDate: "4 Dec · 07:00 PM",
    price: 4299,
    status: "Upcoming",
    pickupPoint: "Patna Junction",
  },
  {
    id: "2",
    city: "Patna → Gaya",
    car: "Maruti Baleno · Petrol",
    date: "10 Dec · 06:00 AM",
    returnDate: "11 Dec · 09:00 PM",
    price: 2699,
    status: "Upcoming",
    pickupPoint: "Boring Road",
  },
];

const pastTrips = [
  {
    id: "3",
    city: "Patna local",
    car: "Toyota Innova Crysta · Diesel",
    date: "18 Nov · 10:00 AM",
    returnDate: "18 Nov · 08:00 PM",
    price: 3199,
    status: "Completed",
    pickupPoint: "Patna Airport",
  },
  {
    id: "4",
    city: "Patna → Bodh Gaya",
    car: "Hyundai Venue · Petrol",
    date: "28 Oct · 05:30 AM",
    returnDate: "29 Oct · 10:00 PM",
    price: 4799,
    status: "Completed",
    pickupPoint: "Kankarbagh",
  },
];

export default function TripsScreen() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const activeTrips = tab === "upcoming" ? upcomingTrips : pastTrips;

  return (
    <SafeAreaView className="flex-1 bg-neutral-950">
      {/* Header */}
      <View className="px-5 pt-3 pb-4 border-b border-zinc-900">
        <Text className="text-xs text-zinc-400">Your bookings</Text>
        <Text className="text-xl text-white font-semibold mt-1">
          My Trips
        </Text>

        {/* Toggle buttons */}
        <View className="flex-row mt-4 bg-zinc-900 rounded-full p-1">
          <TouchableOpacity
            className={`flex-1 rounded-full py-2 items-center ${
              tab === "upcoming" ? "bg-emerald-400" : ""
            }`}
            onPress={() => setTab("upcoming")}
          >
            <Text
              className={`text-xs font-semibold ${
                tab === "upcoming" ? "text-black" : "text-zinc-300"
              }`}
            >
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 rounded-full py-2 items-center ${
              tab === "past" ? "bg-emerald-400" : ""
            }`}
            onPress={() => setTab("past")}
          >
            <Text
              className={`text-xs font-semibold ${
                tab === "past" ? "text-black" : "text-zinc-300"
              }`}
            >
              Past
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Trips list */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
        {activeTrips.length === 0 ? (
          <View className="flex-1 items-center justify-center mt-20">
            <Ionicons
              name="car-sport-outline"
              size={40}
              color="#3f3f46"
            />
            <Text className="text-zinc-400 text-sm mt-3">
              No {tab === "upcoming" ? "upcoming" : "past"} trips yet.
            </Text>
            <Text className="text-zinc-500 text-[11px] mt-1">
              Start by booking your first self-drive car.
            </Text>
          </View>
        ) : (
          activeTrips.map((trip) => (
            <View
              key={trip.id}
              className="mb-4 rounded-3xl bg-zinc-900 p-4 border border-zinc-800"
            >
              {/* Top row: status + price */}
              <View className="flex-row justify-between items-center mb-2">
                <View className="flex-row items-center">
                  <Ionicons
                    name="location-outline"
                    size={14}
                    color="#a1a1aa"
                  />
                  <Text className="text-[12px] text-zinc-300 ml-1">
                    {trip.city}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Text className="text-[11px] text-zinc-400 mr-2">
                    ₹{trip.price}
                  </Text>
                  <View
                    className={`px-2 py-1 rounded-full ${
                      trip.status === "Upcoming"
                        ? "bg-emerald-500/15 border border-emerald-500/60"
                        : "bg-zinc-800 border border-zinc-700"
                    }`}
                  >
                    <Text
                      className={`text-[10px] font-medium ${
                        trip.status === "Upcoming"
                          ? "text-emerald-400"
                          : "text-zinc-300"
                      }`}
                    >
                      {trip.status}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Dates */}
              <View className="mt-1">
                <View className="flex-row items-center justify-between">
                  <View className="flex-1 mr-3">
                    <Text className="text-[10px] text-zinc-500">
                      Pick-up
                    </Text>
                    <Text className="text-[12px] text-zinc-200 mt-0.5">
                      {trip.date}
                    </Text>
                    <Text className="text-[10px] text-zinc-500 mt-1">
                      {trip.pickupPoint}
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[10px] text-zinc-500">
                      Drop-off
                    </Text>
                    <Text className="text-[12px] text-zinc-200 mt-0.5">
                      {trip.returnDate}
                    </Text>
                    <Text className="text-[10px] text-zinc-500 mt-1">
                      Same location
                    </Text>
                  </View>
                </View>
              </View>

              {/* Car name */}
              <View className="mt-3 border-t border-zinc-800 pt-3 flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-[12px] text-white font-semibold">
                    {trip.car}
                  </Text>
                  <Text className="text-[10px] text-zinc-500 mt-1">
                    Self drive · Unlimited km options available
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward-outline"
                  size={18}
                  color="#71717a"
                />
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
