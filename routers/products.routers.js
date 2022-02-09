const express = require("express");
const {
  getProductController,
  createProductController,
  deleteProductController,
  updateProductController,
  fetchProductController,
} = require("../controllers/products.controllers");

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProductController(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getProductController);
// Fetch Product by ID
//router.get("/:productId", fetchProductController);

router.post("/", createProductController);

router.delete("/:productId", deleteProductController);

router.put("/:productId", updateProductController);

module.exports = router;
