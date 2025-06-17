require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/Auth");
const productRoutes = require("./routes/Product");
const orderRoutes = require("./routes/Order");
const cartRoutes = require("./routes/Cart");
const brandRoutes = require("./routes/Brand");
const categoryRoutes = require("./routes/Category");
const userRoutes = require("./routes/User");
const addressRoutes = require('./routes/Address');
const reviewRoutes = require("./routes/Review");
const wishlistRoutes = require("./routes/Wishlist");
const checkoutRoutes = require("./routes/Checkout");
const { connectToDB } = require("./database/db");
const bodyParser = require('body-parser');
const { handleStripeWebhook } = require("./controllers/Checkout");
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
const PORT = process.env.PORT || 8000;


const server = express();
connectToDB();


server.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  exposedHeaders: ['X-Total-Count'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));
server.post("/webhook", bodyParser.raw({ type: 'application/json' }), handleStripeWebhook);


// middlewares
server.use(express.json());
server.use(cookieParser());
server.use(morgan("tiny"));


// routeMiddleware
server.use("/auth", authRoutes);
server.use("/users", userRoutes);
server.use("/products", productRoutes);
server.use("/orders", orderRoutes);
server.use("/cart", cartRoutes);
server.use("/brands", brandRoutes);
server.use("/categories", categoryRoutes);
server.use("/address", addressRoutes);
server.use("/reviews", reviewRoutes);
server.use("/wishlist", wishlistRoutes);
server.use("/checkout", checkoutRoutes);


// Default route to check if the server is running
server.get("/", (req, res) => {
    res.status(200).json({ message: 'running' });
});

// Start the server
server.listen(PORT, () => {
    console.log(`server [STARTED] ~ http://localhost:${PORT}`);
});
