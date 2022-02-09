const express = require("express");
const cors = require("cors");
//const res = require("express/lib/response");
const productRouter = require("./routers/products.routers");
const connectDB = require("./databaseFolder/databaste");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(
    req.method,
    req.protocol,
    "://",
    req.hostname,
    ":",
    PORT,
    req.path
  );
  next();
});
// Routes
app.use("/api/products/", productRouter);
// Not Found MiddleWare
app.use((req, res, next) => {
  res.status(404).json("Path Not Found");
});
// Error Handling Middleware
app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

// Lissen Express App
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
  connectDB();
});
