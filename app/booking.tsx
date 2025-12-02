import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BookingScreen() {
  const router = useRouter();
  const { name, price, location } = useLocalSearchParams();

  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date(Date.now() + 86400000)); // tomorrow
  const [pickupTime, setPickupTime] = useState(new Date());
  const [dropTime, setDropTime] = useState(new Date(Date.now() + 86400000));

  const [showPickupDate, setShowPickupDate] = useState(false);
  const [showDropDate, setShowDropDate] = useState(false);
  const [showPickupTime, setShowPickupTime] = useState(false);
  const [showDropTime, setShowDropTime] = useState(false);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });

  const formatTime = (t: Date) =>
    t.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const calculateTotal = () => {
    const diffDays =
      (dropDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24);
    if (diffDays <= 0) return price;
    return Math.round(diffDays * Number(price));
  };

  const total = calculateTotal();

  return (
    <SafeAreaView className="flex-1 bg-neutral-950 px-6">
      {/* Top bar */}
      <View className="flex-row items-center justify-between mt-2 mb-8">
        <TouchableOpacity
          className="w-9 h-9 rounded-full bg-zinc-900 items-center justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
        <Text className="text-white font-semibold text-base">Select Date</Text>
        <View className="w-9 h-9" />
      </View>

      {/* Card */}
      <View className="bg-neutral-900 rounded-3xl p-5 border border-zinc-800">
        <Text className="text-white text-xl font-bold mb-5">{name}</Text>
        <Text className="text-zinc-400 text-[12px] mb-3">{location}</Text>

        {/* Pickup */}
        <View className="bg-zinc-900 rounded-2xl p-4 mb-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-medium">Pickup</Text>
            <TouchableOpacity
              onPress={() => setShowPickupDate(true)}
              className="flex-row items-center"
            >
              <Text className="text-emerald-400 text-xs mr-1">
                {formatDate(pickupDate)}
              </Text>
              <Ionicons name="calendar-outline" size={14} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="flex-row justify-between items-center mt-2"
            onPress={() => setShowPickupTime(true)}
          >
            <Text className="text-zinc-500 text-[10px]">Time</Text>
            <Text className="text-emerald-400 text-xs">
              {formatTime(pickupTime)}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Dropoff */}
        <View className="bg-zinc-900 rounded-2xl p-4 mb-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-medium">Dropoff</Text>
            <TouchableOpacity
              onPress={() => setShowDropDate(true)}
              className="flex-row items-center"
            >
              <Text className="text-emerald-400 text-xs mr-1">
                {formatDate(dropDate)}
              </Text>
              <Ionicons name="calendar-outline" size={14} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="flex-row justify-between items-center mt-2"
            onPress={() => setShowDropTime(true)}
          >
            <Text className="text-zinc-500 text-[10px]">Time</Text>
            <Text className="text-emerald-400 text-xs">
              {formatTime(dropTime)}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Total */}
        <View className="flex-row justify-between mt-5">
          <Text className="text-zinc-400 text-xs">Total amount</Text>
          <Text className="text-white text-lg font-bold">₹{total}</Text>
        </View>
      </View>

      {/* Continue */}
      <TouchableOpacity
        className="mt-8 w-full bg-emerald-400 rounded-full py-4 items-center"
        onPress={() => router.push("/confirm")}
      >
        <Text className="text-black text-base font-semibold">Continue</Text>
      </TouchableOpacity>

      {/* Pickers */}
      {showPickupDate && (
        <DateTimePicker
          value={pickupDate}
          mode="date"
          onChange={(_, d) => {
            if (d) setPickupDate(d);
            setShowPickupDate(false);
          }}
        />
      )}

      {showDropDate && (
        <DateTimePicker
          value={dropDate}
          mode="date"
          onChange={(_, d) => {
            if (d) setDropDate(d);
            setShowDropDate(false);
          }}
        />
      )}

      {showPickupTime && (
        <DateTimePicker
          value={pickupTime}
          mode="time"
          is24Hour={false}
          onChange={(_, t) => {
            if (t) setPickupTime(t);
            setShowPickupTime(false);
          }}
        />
      )}

      {showDropTime && (
        <DateTimePicker
          value={dropTime}
          mode="time"
          is24Hour={false}
          onChange={(_, t) => {
            if (t) setDropDate(t);
            setShowDropTime(false);
          }}
        />
      )}
    </SafeAreaView>
  );
}
