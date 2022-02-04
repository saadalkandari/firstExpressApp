const express = require("express");
//const res = require("express/lib/response");
const productRouter = require("./routers/products.routers");
const connectDB = require("./databaseFolder/databaste");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products/", productRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
  connectDB();
});
