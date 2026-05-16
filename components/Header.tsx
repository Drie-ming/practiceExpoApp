import { View, Text, Pressable } from "react-native";
import React from "react";
import RemixIcon from "react-native-remix-icon";
import { useRouter } from "expo-router";

const header = () => {

     const router = useRouter();

  return (
    <View className="justify-center  w-full h-28 bg-lime-400 shadow-md">
      <View className=" flex-row justify-between items-start m-3">
        <View>
          <Text className="font-bold text-2xl m-1">Sari na Sari Store pa</Text>
        </View>
        <View>
          <Pressable className=" mr-2" onPress={() => router.push('/viewCart')}>
            <RemixIcon name="shopping-cart-line" size={40} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default header;
