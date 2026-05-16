import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const viewCart = () => {
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await AsyncStorage.getItem("cart");
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };
    loadCart();
  }, []);

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
       setCart([]);
    } catch (e) {
        return
    }
  };

  const router = useRouter()
  return (
    <View className="flex-1 justify-center items-center">
      <View className="mt-4 p-4 bg-white rounded-lg w-[90%]">
        <Text className="text-lg font-bold mb-2">Cart</Text>
        {cart.map((item, index) => (
          <Text key={index}>
            {item.name} x {item.quantity} — ₱{item.price * item.quantity}
          </Text>
        ))}

      </View>

      <Pressable
        onPress={clearAllData}
        className="mt-4 px-6 py-2 bg-red-500 rounded-md shadow"
      >
        <Text className="text-white font-semibold">Clear Cart</Text>
      </Pressable>

       <Pressable
        onPress={() => router.push('/')}
        className="mt-4 px-6 py-2 bg-gray-700 rounded-md shadow"
      >
        <Text className="text-white font-semibold">Go Back</Text>
      </Pressable>
    </View>
  );
};

export default viewCart;
