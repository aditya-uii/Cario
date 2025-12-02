// app/(tabs)/profile.tsx
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [aadhaarImg, setAadhaarImg] = useState<string | null>(null);
  const [licenseImg, setLicenseImg] = useState<string | null>(null);
  const [selfieImg, setSelfieImg] = useState<string | null>(null);

  const pickImage = async (setter: (uri: string) => void) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setter(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-950">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        {/* User card */}
        <View className="bg-zinc-900 rounded-3xl p-5 flex-row items-center border border-zinc-800">
          <View className="w-14 h-14 rounded-full bg-emerald-400 items-center justify-center overflow-hidden">
            {selfieImg ? (
              <Image source={{ uri: selfieImg }} className="w-14 h-14" />
            ) : (
              <Ionicons name="person-outline" size={32} color="black" />
            )}
          </View>

          <View className="ml-4 flex-1">
            <Text className="text-white font-semibold text-lg">
              Aditya Kashyap
            </Text>
            <Text className="text-[11px] text-zinc-400 mt-1">
              Renter account · KYC pending
            </Text>
          </View>
        </View>

        {/* Account section */}
        <Text className="text-sm text-zinc-400 font-semibold mt-8 mb-3">
          Account
        </Text>

        <View>
          <Row icon="call-outline" label="My number" value="+91 XXXXX XXXXX" />
          <Row icon="car-sport-outline" label="Saved cars" />
          <Row icon="cash-outline" label="Payment methods" />
          <Row icon="settings-outline" label="App settings" />
        </View>

        {/* KYC section */}
        <Text className="text-sm text-zinc-400 font-semibold mt-8 mb-3">
          KYC verification
        </Text>

        {/* Aadhaar */}
        <Text className="text-white font-medium mb-2">Aadhaar card</Text>
        <TouchableOpacity
          className="border border-zinc-700 rounded-2xl h-32 items-center justify-center mb-4 bg-zinc-900"
          onPress={() => pickImage((uri) => setAadhaarImg(uri))}
        >
          {aadhaarImg ? (
            <Image
              source={{ uri: aadhaarImg }}
              className="w-full h-32 rounded-2xl"
              resizeMode="cover"
            />
          ) : (
            <View className="items-center">
              <Ionicons name="id-card-outline" size={32} color="#a1a1aa" />
              <Text className="text-[11px] text-zinc-500 mt-2">
                Tap to upload Aadhaar
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Driving licence */}
        <Text className="text-white font-medium mb-2">Driving licence</Text>
        <TouchableOpacity
          className="border border-zinc-700 rounded-2xl h-32 items-center justify-center mb-4 bg-zinc-900"
          onPress={() => pickImage((uri) => setLicenseImg(uri))}
        >
          {licenseImg ? (
            <Image
              source={{ uri: licenseImg }}
              className="w-full h-32 rounded-2xl"
              resizeMode="cover"
            />
          ) : (
            <View className="items-center">
              <Ionicons
                name="document-text-outline"
                size={32}
                color="#a1a1aa"
              />
              <Text className="text-[11px] text-zinc-500 mt-2">
                Tap to upload licence
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Selfie */}
        <Text className="text-white font-medium mb-2">Selfie</Text>
        <TouchableOpacity
          className="border border-zinc-700 rounded-2xl h-32 items-center justify-center bg-zinc-900"
          onPress={() => pickImage((uri) => setSelfieImg(uri))}
        >
          {selfieImg ? (
            <Image
              source={{ uri: selfieImg }}
              className="w-full h-32 rounded-2xl"
              resizeMode="cover"
            />
          ) : (
            <View className="items-center">
              <Ionicons name="camera-outline" size={32} color="#a1a1aa" />
              <Text className="text-[11px] text-zinc-500 mt-2">
                Tap to upload selfie
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity className="mt-8 w-full bg-emerald-400 rounded-full py-4 items-center">
          <Text className="text-black font-semibold text-sm">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

type RowProps = {
  icon: string;
  label: string;
  value?: string;
};

function Row({ icon, label, value }: RowProps) {
  return (
    <View className="flex-row items-center bg-zinc-900 border border-zinc-800 rounded-full px-3 h-11 mb-2">
      <Ionicons name={icon as any} size={18} color="#e5e5e5" />
      <Text className="text-[12px] text-zinc-200 ml-2 flex-1">{label}</Text>
      {value ? (
        <Text className="text-[11px] text-zinc-500 mr-1">{value}</Text>
      ) : null}
      <Ionicons name="chevron-forward" size={16} color="#71717a" />
    </View>
  );
}
