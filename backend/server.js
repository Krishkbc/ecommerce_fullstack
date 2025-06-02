import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import wishlistRoutes from "./routes/WishlistRoute.js";
import cartRoute from "./routes/CartRoute.js";

const PORT = 8001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
