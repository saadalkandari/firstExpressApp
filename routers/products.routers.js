const express = require("express");
const {
  getProductController,
  createProductController,
  deleteProductController,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", getProductController);

router.post("/", createProductController);

router.delete("/:productId", deleteProductController);

module.exports = router;
