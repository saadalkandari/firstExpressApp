const Product = require("../databaseFolder/Models/products.models");
const data = require("../data");

//let products = data;

exports.getProductController = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    //res.status(500).json({ error: error.message });
    next(error);
  }
};

exports.fetchProductController = async (productId, next) => {
  try {
    const fetchProduct = await Product.findById(productId);
    return fetchProduct;
  } catch (error) {
    next(error);
  }
};

exports.createProductController = async (req, res, next) => {
  try {
    const product = req.body;
    const newProduct = await Product.create(product);
    res.status(201).json({ msg: "product is created", payload: newProduct });
  } catch (error) {
    //res.status(500).json({ msg: error.message });
    next(error);
  }
  //const product = req.body;
  //products = [...products, product];
  //const { name, description, color, quantity, price, image } = req.body;
  //const product = {
  //  name,
  //  description,
  //  color,
  //  quantity,
  //  price,
  //  image,
  //  id: Math.floor(Math.random() * 100),
  //};
  // products = [...products, product];
  // res.status(201).json({ msg: "create a product", products });
};

exports.deleteProductController = async (req, res, next) => {
  try {
    //const { productId } = req.params;
    const productId = req.product._id;
    const deleteProduct = await Product.findByIdAndDelete(productId);
    if (deleteProduct) {
      res.status(204).json({ msg: "Product Deleted" });
    } else {
      res.status(404).json({ msg: "product doesn't exist" });
    }
  } catch (error) {
    //res.status(500).json({ msg: error.message });
    next(error);
  }
  //const product = products.find((product) => +product.id === +productId);
  //if(product){
  //   products = products.filter((product) => +product.id !== +productId);
  //res.status(204).end();
  // }else{
  //res.status(404).json({error: `product with id${productId} is not found`});
  //  }
  //products = products.filter((product) => +product.id !== +productId);
  //res.status(202).json(products);
};

exports.updateProductController = async (req, res, next) => {
  try {
    const productId = req.product._id;
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    //res.status(500).json({ msg: error.message });
    next(error);
  }
};
