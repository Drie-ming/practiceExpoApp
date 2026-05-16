

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
    name: "Coca-Cola",
    category: "Drinks",
    price: 45,
    image: require("./assets/images/cocaColaCan.png"),
  },
  {
    id: 2,
    name: "Pepsi ",
    category: "Drinks",
    price: 40,
    image: require("./assets/images/pepsiCan.png"),
  },
  {
    id: 3,
    name: "Potato Chips",
    category: "Snacks",
    price: 25,
    image: require("./assets/images/potato-chips.png"),
  },
  {
    id: 4,
    name: "Dairy Milk Bar",
    category: "Snacks",
    price: 30,
    image: require("./assets/images/dairyMilkChoco.png"),
  },
  {
    id: 5,
    name: "Popcorn",
    category: "Snacks",
    price: 20,
    image: require("./assets/images/popcorn.png"),
  },
  {
    id: 6,
    name: "Speed Bar Soap",
    category: "Soap & Detergent",
    price: 55,
    image: require("./assets/images/speedSoap.jpg"),
  },
  {
    id: 7,
    name: "Joy Dishwashing Liquid",
    category: "Soap & Detergent",
    price: 35,
    image: require("./assets/images/joySoap.png"),
  },
  {
    id: 8,
    name: "Sulphur Soap",
    category: "Soap & Detergent",
    price: 20,
    image: require("./assets/images/sulphurSoap.png"),
  },
  {
    id: 9,
    name: "Gerorade",
    category: "Drinks",
    price: 50,
   image: require("./assets/images/getorade.jpg"),
  },
  {
    id: 10,
    name: "Yakee",
    category: "Snacks",
    price: 10,
   image: require("./assets/images/yakee.jpg"),
  },
];
