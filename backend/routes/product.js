const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.create);
router.get("/", productController.getProduct);
router.put("/:id", productController.updatedProduct);

module.exports = router;
