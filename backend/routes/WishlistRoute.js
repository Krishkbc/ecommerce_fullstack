import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { addToWishlist, showWishlist } from "../helpers/Wishlist.js";

const router = Router();

router.post("/add", verifyToken, async (req, res) => {
  const { product_id } = req.body;
  const jwtData = req.user;
  console.log(product_id);

  console.log(req.headers);
  if (!product_id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const result = await addToWishlist(jwtData.id, product_id);
    console.log("this the try block", product_id);
    res.status(200).json({ message: "Product added to wishlist", result });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ message: "Database error" });
  }
});

router.get("/show", verifyToken, async (req, res) => {
  const jwtData = req.user;

  try {
    const data = await showWishlist(jwtData);
    res.status(200).json({ wishlist: data });

    console.log(data);
  } catch (error) {
    console.error("Error showing the wishlist:", error);
    res.status(500).json({ message: "Database error" });
  }
});

export default router;
