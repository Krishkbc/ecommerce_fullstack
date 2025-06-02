import { Router } from "express";
import {
  addToCart,
  checkIfProductInCart,
  incrementCartQuantity,
  showCartItems,
} from "../helpers/cart.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/add", verifyToken, async (req, res) => {
  const jwtData = req.user;
  const { product_id, quantity } = req.body;

  if (!product_id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const row = await checkIfProductInCart(jwtData.id, product_id);
    console.log(row);
    if (row) {
      const result = incrementCartQuantity(jwtData.id, product_id, quantity);
      res
        .status(200)
        .json({ message: "Product quantity updated in the cart", result });
    } else {
      const result = await addToCart(jwtData.id, product_id, quantity);
      res.status(200).json({ message: "Product added to cart", result });
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ message: "Database error" });
  }
});

router.get("/show", verifyToken, async (req, res) => {
  const jwtData = req.user;
  try {
    const data = await showCartItems(jwtData.id);
    res.status(200).json({ wishlist: data });
  } catch (error) {
    console.error("Error showing the wishlist:", error);
    res.status(500).json({ message: "Database error" });
  }
});

export default router;
