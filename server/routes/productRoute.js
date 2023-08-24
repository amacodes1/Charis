const express = require("express");
const { createNewProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require("../controllers/productController");
const router = express.Router();

router.post("/", createNewProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getProduct/:id", getProduct);
router.get("/getAllProducts", getAllProducts);

module.exports = router;