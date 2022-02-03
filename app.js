const express = require("express");
const res = require("express/lib/response");
const data = require("./data");
const app = express();
const PORT = 8000;

let products = data;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const { name, description, color, quantity, price, image } = req.body;
  const product = {
    name,
    description,
    color,
    quantity,
    price,
    image,
    id: Math.floor(Math.random() * 100),
  };
  products = [...products, product];
  res.status(201).json({ msg: "create a product", products });
});

app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  //products = products.find((product) => +product.id == +productId);
  products = products.filter((product) => +product.id !== +productId);
  res.status(202).json(products);
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
});
