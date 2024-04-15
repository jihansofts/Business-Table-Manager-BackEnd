const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

// C=Create
router.get(
  "/ProductList/:pageNo/:perPage/:searchKeyword",
  ProductController.ProductList
);

module.exports = router;
