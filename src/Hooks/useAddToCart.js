import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import { AreaChart } from "lucide-react";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);

  const updateCart = async (userId, newItem, quantity) => {
    setLoading(true);

    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        console.log("user not found");
        return;
      }

      const userData = userSnap.data();
      const existingCart = Array.isArray(userData.cart) ? userData.cart : [];

      // Check if the product already exists in the cart
      const existingProductIndex = existingCart.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingProductIndex !== -1) {
        const updatedProduct = {
          ...existingCart[existingProductIndex],
          quantity:
            (existingCart[existingProductIndex].quantity || 0) + quantity,
          stockRemaining:
            existingCart[existingProductIndex].stockRemaining - quantity,
        };

        existingCart[existingProductIndex] = updatedProduct;
      } else {
        existingCart.push({
          ...newItem,
          quantity: quantity,
          stockRemaining: newItem.stockRemaining - quantity,
        });
      }

      await setDoc(userRef, { cart: existingCart }, { merge: true });

      console.log("cart is updated");
    } catch (err) {
      console.log("Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCart = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const cart = Array.isArray(userData.cart) ? userData.cart : [];
      // console.log("cart", cart);
      return cart;
    } else {
      // console.log("user not found");
      return [];
    }
  };

  const removeFromCart = async (userId, id) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const cart = Array.isArray(userData.cart) ? userData.cart : [];

      const updatedCart = cart.filter((item) => item.id !== id);

      await setDoc(userRef, { cart: updatedCart }, { merge: true });
    }
  };

  return { loading, updateCart, fetchCart, removeFromCart };
};

export default useAddToCart;
