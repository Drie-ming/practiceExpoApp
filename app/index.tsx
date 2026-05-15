import { FlatList, Image, Pressable, Text, View } from "react-native";
import RemixIcon from "react-native-remix-icon";
import Header from "@/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import drinksIcon from "../assets/images/drinksIcon.png";
import chipsIcon from "../assets/images/chipsIcon.png";
import SoapAndDetergentIcon from "../assets/images/soapAndDetergentIcon.png";
import { products } from "../ProductData";
import { useEffect, useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<any[]>([]);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsOpen(true);
  };

  const confirmAddToCart = async () => {
    if (!selectedProduct) return;
    const newItem = { ...selectedProduct, quantity };
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);

    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));

    } catch (e) {
       setIsOpen(false);
    }

    setIsOpen(false);
  };

  return (
    <View className="flex-1 justify-start items-center bg-slate-300">
      <Header />

      <View className="justify-center w-full mb-3 border-y-2 p-2">
        <Text className="ml-5 text-xl font-semibold">Category</Text>

        <View className="flex-row justify-center items-center gap-5">
          <Pressable className="">
            <Image style={{ width: 100, height: 100 }} source={drinksIcon} />
          </Pressable>

          <Pressable>
            <Image style={{ width: 100, height: 100 }} source={chipsIcon} />
          </Pressable>

          <Pressable>
            <Image
              style={{ width: 100, height: 100 }}
              source={SoapAndDetergentIcon}
            />
          </Pressable>
        </View>
      </View>

      
      <View className="w-[95%] h-[50%] border-2 border-solid">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="self-center w-[90%] flex-col justify-center items-center my-3 p-4 border-2 border-black rounded-lg bg-white">
              <Image source={item.image} style={{ width: 120, height: 120 }} />
              <Text className="text-lg font-bold mt-2">{item.name}</Text>
              <Text className="text-base text-gray-700">₱{item.price}</Text>

              <Pressable
                onPress={() => openModal(item)}
                className="mt-3 px-4 py-2 bg-green-400 rounded-md shadow"
              >
                <Text className="font-semibold text-white">Add to Cart</Text>
              </Pressable>
            </View>
          )}
        />
      </View>

      
      {isOpen && (
        <View className="absolute inset-0 flex-1 justify-center items-center bg-black/50">
          <View className="w-72 p-6 bg-white rounded-lg items-center">
            <Text className="text-lg font-bold mb-4">
              {selectedProduct?.name}
            </Text>

            
            <View className="flex-row items-center space-x-6 mb-4">
              <Pressable
                onPress={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="px-4 py-2 bg-red-400 rounded-md"
              >
                <Text className="text-white font-bold">-</Text>
              </Pressable>

              <Text className="text-xl font-bold">{quantity}</Text>

              <Pressable
                onPress={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 bg-green-400 rounded-md"
              >
                <Text className="text-white font-bold">+</Text>
              </Pressable>
            </View>

           
            <Pressable
              onPress={confirmAddToCart}
              className="px-6 py-2 bg-blue-500 rounded-md shadow"
            >
              <Text className="text-white font-semibold">Confirm</Text>
            </Pressable>

          
            <Pressable
              onPress={() => setIsOpen(false)}
              className="mt-2 px-6 py-2 bg-gray-400 rounded-md"
            >
              <Text className="text-white">Cancel</Text>
            </Pressable>
          </View>
        </View>
      )}

      
    </View>
  );
}
