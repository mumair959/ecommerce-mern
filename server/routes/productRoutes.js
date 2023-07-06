import express from "express";
import productController from "../controllers/productController";

const router = express.Router();

const uri = "/product";

router.get(uri+"/", productController.getAllProducts);

router.get(uri+"/:id", productController.getProduct);

router.get(uri+"/top-products/:category", productController.getTopProductByCategory);

router.get(uri+"/category/:category", productController.getProductByCategory);

router.get(uri+"/count/items", productController.getProductCountByCategory);

router.post(uri+"/", productController.createProduct);

router.put(uri+"/", productController.updateProduct);

router.put(uri+"/activate/", productController.activateProduct);

router.put(uri+"/deactivate/", productController.deactivateProduct);

router.delete(uri+"/:id", productController.deleteProduct);

module.exports = router;