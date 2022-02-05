const express = require("express");
const {
  getProductController,
  createProductController,
  deleteProductController,
  updateProductController,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", getProductController);

router.post("/", createProductController);

router.delete("/:productId", deleteProductController);

router.put("/:productId", updateProductController);

module.exports = router;
