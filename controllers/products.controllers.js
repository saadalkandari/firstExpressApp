const Product = require("../databaseFolder/Models/products.models");
const data = require("../data");

let products = data;

exports.getProductController = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProductController = (req, res) => {
  //const product = req.body;
  //products = [...products, product];
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
  //const product = products.find((product) => +product.id === +productId);
  //if(product){
  //   products = products.filter((product) => +product.id !== +productId);
  //res.status(204).end();
  // }else{
  //res.status(404).json({error: `product with id${productId} is not found`});
  //  }
  products = products.filter((product) => +product.id !== +productId);
  res.status(202).json(products);
};
