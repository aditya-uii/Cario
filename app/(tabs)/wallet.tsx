// app/(tabs)/wallet.tsx
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const transactions = [
  {
    id: "1",
    type: "Booking payment",
    amount: -2499,
    date: "28 Nov, 10:32 AM",
    car: "Hyundai i20 · Patna local",
    status: "Completed",
  },
  {
    id: "2",
    type: "Refund credited",
    amount: 800,
    date: "25 Nov, 04:18 PM",
    car: "Patna → Gaya",
    status: "Refund",
  },
  {
    id: "3",
    type: "Cashback",
    amount: 150,
    date: "20 Nov, 08:12 PM",
    car: "Weekend offer",
    status: "Cashback",
  },
  {
    id: "4",
    type: "Booking payment",
    amount: -3199,
    date: "10 Nov, 09:45 AM",
    car: "Innova Crysta · Airport",
    status: "Completed",
  },
];

export default function WalletScreen() {
  const [filter, setFilter] = useState<"all" | "credit" | "debit">("all");

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "credit") return t.amount > 0;
    if (filter === "debit") return t.amount < 0;
    return true;
  });

  const walletBalance = 1350; // dummy balance

  return (
    <SafeAreaView className="flex-1 bg-neutral-950">
      {/* Header */}
      <View className="px-5 pt-3 pb-4 border-b border-zinc-900">
        <Text className="text-xs text-zinc-400">Payments & credits</Text>
        <Text className="text-xl text-white font-semibold mt-1">
          Wallet
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
       {/* Balance card */}
<View className="bg-emerald-400 rounded-3xl p-5 mb-5 shadow-lg border border-emerald-300">
  <View className="flex-row justify-between items-center">
    <View className="flex-1">
      <Text className="text-sm text-black/70 font-medium">Available balance</Text>
      <Text className="text-4xl font-extrabold text-black mt-2">₹{walletBalance}</Text>
      <Text className="text-xs text-black/60 mt-2">Use this balance for your next car rental</Text>
    </View>

    <View className="ml-3 items-center">
      <Ionicons name="wallet-outline" size={36} color="black" />
    </View>
  </View>

  <View className="flex-row mt-5 gap-3">
    <TouchableOpacity className="flex-1 bg-black rounded-full py-3 items-center justify-center shadow-sm">
      <Text className="text-white text-sm font-semibold">Add money</Text>
    </TouchableOpacity>

    <TouchableOpacity className="flex-1 bg-black rounded-full py-3 items-center justify-center shadow-sm">
      <Text className="text-white text-sm font-semibold">Withdraw</Text>
    </TouchableOpacity>
  </View>
</View>


        {/* Small info card */}
        <View className="bg-zinc-900 rounded-2xl p-4 mb-4 border border-zinc-800 flex-row">
          <Ionicons name="information-circle-outline" size={20} color="#a1a1aa" />
          <View className="ml-3 flex-1">
            <Text className="text-[12px] text-zinc-200 font-medium">
              How wallet works
            </Text>
            <Text className="text-[11px] text-zinc-500 mt-1">
              Refunds, cashback and promo credits are added here. You can use this amount for future bookings.
            </Text>
          </View>
        </View>

        {/* Filter chips */}
        <View className="flex-row mb-3">
          {[
            { key: "all", label: "All" },
            { key: "credit", label: "Credits" },
            { key: "debit", label: "Debits" },
          ].map((f) => (
            <TouchableOpacity
              key={f.key}
              onPress={() => setFilter(f.key as any)}
              className={`px-3 py-1.5 rounded-full mr-2 border ${
                filter === f.key
                  ? "bg-emerald-400 border-emerald-400"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              <Text
                className={`text-[11px] font-medium ${
                  filter === f.key ? "text-black" : "text-zinc-200"
                }`}
              >
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Transactions */}
        <Text className="text-[12px] text-zinc-400 mb-2">
          Recent transactions
        </Text>

        {filteredTransactions.length === 0 ? (
          <View className="mt-10 items-center">
            <Ionicons name="receipt-outline" size={32} color="#3f3f46" />
            <Text className="text-zinc-400 text-sm mt-2">
              No transactions found.
            </Text>
          </View>
        ) : (
          filteredTransactions.map((tx) => {
            const isCredit = tx.amount > 0;
            return (
              <View
                key={tx.id}
                className="mb-3 rounded-2xl bg-zinc-900 p-4 border border-zinc-800"
              >
                <View className="flex-row justify-between items-center mb-1">
                  <View className="flex-row items-center">
                    <View className="w-7 h-7 rounded-full bg-zinc-800 items-center justify-center mr-2">
                      <Ionicons
                        name={
                          isCredit ? "arrow-down-circle-outline" : "arrow-up-circle-outline"
                        }
                        size={16}
                        color={isCredit ? "#22c55e" : "#f97316"}
                      />
                    </View>
                    <View>
                      <Text className="text-[12px] text-zinc-100 font-medium">
                        {tx.type}
                      </Text>
                      <Text className="text-[11px] text-zinc-500">
                        {tx.car}
                      </Text>
                    </View>
                  </View>

                  <View className="items-end">
                    <Text
                      className={`text-sm font-semibold ${
                        isCredit ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {isCredit ? "+" : "-"}₹{Math.abs(tx.amount)}
                    </Text>
                    <Text className="text-[10px] text-zinc-500 mt-1">
                      {tx.date}
                    </Text>
                  </View>
                </View>

                <View className="flex-row justify-between items-center mt-2">
                  <View
                    className={`px-2 py-1 rounded-full ${
                      tx.status === "Refund"
                        ? "bg-emerald-500/10 border border-emerald-500/40"
                        : tx.status === "Cashback"
                        ? "bg-sky-500/10 border border-sky-500/40"
                        : "bg-zinc-800 border border-zinc-700"
                    }`}
                  >
                    <Text
                      className={`text-[10px] font-medium ${
                        tx.status === "Refund"
                          ? "text-emerald-400"
                          : tx.status === "Cashback"
                          ? "text-sky-400"
                          : "text-zinc-300"
                      }`}
                    >
                      {tx.status}
                    </Text>
                  </View>

                  <Text className="text-[10px] text-zinc-500">
                    UPI • **** 9210
                  </Text>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
