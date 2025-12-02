// app/index.tsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-neutral-900 items-center justify-center px-6">
      {/* Main card */}
      <View className="w-full rounded-3xl bg-zinc-900 overflow-hidden pb-8 pt-10 px-6">
        {/* Car image */}
        <View className="w-full items-center">
          <Image
            source={require('../assets/images/hero-car.jpeg')}
            className="w-full h-40"
            resizeMode="contain"
          />
        </View>

        {/* Pills */}
        <View className="flex-row space-x-2 mt-6">
          <View className="px-3 py-1 rounded-lg bg-zinc-800">
            <Text className="text-xs text-zinc-200 font-medium">Search</Text>
          </View>
          <View className="px-3 py-1 rounded-lg bg-zinc-800">
            <Text className="text-xs text-zinc-200 font-medium">Compare</Text>
          </View>
          <View className="px-3 py-1 rounded-lg bg-zinc-800">
            <Text className="text-xs text-zinc-200 font-medium">Hire</Text>
          </View>
        </View>

        {/* Text */}
        <View className="mt-6">
          <Text className="text-3xl font-semibold text-white leading-tight">
            Find the ideal car{'\n'}rental for your trip!
          </Text>
          <Text className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Get access to the best deals from global car rental companies.
          </Text>
        </View>

        {/* Get started button */}
        <TouchableOpacity
          className="mt-8 w-full bg-emerald-400 rounded-full py-4 items-center justify-center"
          onPress={() => router.push('/auth')}
        >
          <Text className="text-base font-semibold text-black">
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
