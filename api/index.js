const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const adminRouter = require("./routes/admin");
const { verifyToken } = require("./middleware/verifyToken");
const Product = require("./models/Product");
require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Mongodb Connected!"));
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/admin", adminRouter);


const products = [
  
  {
    name: "Redmi Note 13 5G",
    price: 16000,
    category: "Electronics",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgJr-dueYz8uc9jER-FCuPJ_zyKcdno6Lag&s"
  },
  {
    name: "Sony WH-XB910N Headphones",
    price: 12000,
    category: "Electronics",
    img: "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017346208_437Wx649H_202304251122161.jpeg"
  },
  {
    name: "HP 15s Ryzen 5 Laptop",
    price: 45000,
    category: "Electronics",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGbPuPYGQ_Zss778zmSRKqyoUvGlK8oE9XA&s"
  },
  {
    name: "Boat Airdopes 170",
    price: 1400,
    category: "Electronics",
    img: "https://s3.ap-south-1.amazonaws.com/assetsv1.viveks.com/product/2207/fYy6BfN55pElOYKK2eh1ebujXI1PYL4jN9lh6MRR.webp"
  },
  {
    name: "Mi Power Bank 3i",
    price: 1100,
    category: "Electronics",
    img: "https://i01.appmifile.com/webfile/globalimg/products/m/mi-50w-power-bank-20000/section11_3.png"
  }


    
]


app.get("/", async (req, res) => {
  res.send("Hello!");
 // await Product.insertMany(products)
});

app.listen(5000, () => console.log("No worries! "));
