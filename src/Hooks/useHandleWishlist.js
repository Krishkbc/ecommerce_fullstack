import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const useHandleWishlist = () => {
  const fetchWishlist = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const wishlist = Array.isArray(userData.wishlist)
          ? userData.wishlist
          : [];

        // console.log("Wishlist:", wishlist);
        return wishlist;
      } else {
        console.log("User not found");
        return [];
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const addToWishlist = async (userId, newItem) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      console.log("add to wishlist started");

      if (!userSnap.exists()) {
        console.log("User not found.");
        return;
      }

      const userData = userSnap.data();
      const existingWishlist = Array.isArray(userData.wishlist)
        ? userData.wishlist
        : [];

      const alreadyExists = existingWishlist.some(
        (item) => item.id === newItem.id
      );

      if (alreadyExists) {
        console.log("Product already in wishlist.");
        return;
      }

      const updatedWishlist = [...existingWishlist, newItem];

      await setDoc(userRef, { wishlist: updatedWishlist }, { merge: true });

      console.log("Product added to wishlist.");
    } catch (err) {
      console.log(err.message);
    }
  };

  // Remove an item from the list 

  const removeFromWishList = async (userId, id) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const wishlist = Array.isArray(userData.wishlist)
        ? userData.wishlist
        : [];

      const updatedWishlist = wishlist.filter((item) => item.id !== id);
      await setDoc(userRef, { wishlist: updatedWishlist }, { merge: true });
    } else {
      console.log("the user does not exist ");
    }
  };

  return { fetchWishlist, addToWishlist, removeFromWishList };
};

export default useHandleWishlist;
