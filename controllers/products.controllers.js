const data = require("../data");

let products = data;

exports.getProductController = (req, res) => {
  res.json(products);
};

exports.createProductController = (req, res) => {
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
};

exports.deleteProductController = (req, res) => {
  const { productId } = req.params;
  //products = products.find((product) => +product.id == +productId);
  products = products.filter((product) => +product.id !== +productId);
  res.status(202).json(products);
};
