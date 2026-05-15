import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import RemixIcon from "react-native-remix-icon";
import { useRouter } from "expo-router";

const header = () => {

     const router = useRouter();

  return (
    <View className="w-full h-28 bg-lime-400 shadow-md">
      <View className=" flex-row justify-between items-start m-3">
        <View>
          <Text className="font-bold text-xl m-1">Sari na Sari Store pa</Text>
        </View>

        <View>
          <Pressable className=" mr-2" onPress={() => router.push('/viewCart')}>
            <RemixIcon name="shopping-cart-line" size={20} />
          </Pressable>
        </View>
      </View>

      <View className="flex-row justify-center items-center gap-2">
        <View className="">
          <Pressable className="" onPress={null}>
            <RemixIcon name="search-line" size={25} />
          </Pressable>
        </View>

        <View>
          <TextInput className="border-2 border-solid h-10 p-2" />
        </View>
      </View>
    </View>
  );
};

export default header;
