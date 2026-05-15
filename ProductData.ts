// types.ts
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: any; // can be require("...") if local asset
};

// fakeData.ts

export const products: Product[] = [
  {
    id: 1,
    name: "Coca-Cola 1L",
    category: "Drinks",
    price: 45,
    image: require("./assets/images/drinksIcon.png"),
  },
  {
    id: 2,
    name: "Pepsi 1L",
    category: "Drinks",
    price: 40,
    image: require("./assets/images/drinksIcon.png"),
  },
  {
    id: 3,
    name: "Potato Chips",
    category: "Snacks",
    price: 25,
    image: require("./assets/images/chipsIcon.png"),
  },
  {
    id: 4,
    name: "Chocolate Bar",
    category: "Snacks",
    price: 30,
    image: require("./assets/images/chipsIcon.png"),
  },
  {
    id: 5,
    name: "Popcorn",
    category: "Snacks",
    price: 20,
    image: require("./assets/images/chipsIcon.png"),
  },
  {
    id: 6,
    name: "Laundry Powder",
    category: "Soap & Detergent",
    price: 55,
    image: require("./assets/images/soapAndDetergentIcon.png"),
  },
  {
    id: 7,
    name: "Dishwashing Liquid",
    category: "Soap & Detergent",
    price: 35,
    image: require("./assets/images/soapAndDetergentIcon.png"),
  },
  {
    id: 8,
    name: "Bath Soap",
    category: "Soap & Detergent",
    price: 20,
    image: require("./assets/images/soapAndDetergentIcon.png"),
  },
  {
    id: 9,
    name: "Energy Drink",
    category: "Drinks",
    price: 50,
   image: require("./assets/images/soapAndDetergentIcon.png"),
  },
  {
    id: 10,
    name: "Candy Pack",
    category: "Snacks",
    price: 10,
   image: require("./assets/images/soapAndDetergentIcon.png"),
  },
];
