import { db } from "./config";

const generateProducts = () => {
  const brands = [
    "SpeedDrive",
    "TechNova",
    "UltraByte",
    "DataCore",
    "MegaStore",
  ];
  const categories = ["Storage", "Accessories", "Networking", "Peripherals"];
  const tagsPool = [
    "ssd",
    "portable",
    "storage",
    "fast",
    "durable",
    "wireless",
    "usb-c",
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const id = Number(i + 1);
    const name = `Product ${id}`;
    const description = `This is the description for Product ${id}. Great performance and value.`;
    const price = (Math.random() * 200 + 50).toFixed(2); // price between $50 and $250
    const stock = Math.floor(Math.random() * 20) + 1; // stock between 1 and 20
    const brand = brands[i % brands.length];
    const category = categories[i % categories.length];
    const tags = [
      tagsPool[i % tagsPool.length],
      tagsPool[(i + 1) % tagsPool.length],
      tagsPool[(i + 2) % tagsPool.length],
    ];

    return {
      id,
      name,
      description,
      price: parseFloat(price),
      stock,
      stockRemaining: stock,
      brand,
      category,
      tags,
    };
  });
};

const products = generateProducts();

db.collection("products")
  .add(products)
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
