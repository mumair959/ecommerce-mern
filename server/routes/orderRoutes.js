import express from "express";
import orderController from "../controllers/orderController";

const router = express.Router();

const uri = "/order";

router.get(uri+"/", orderController.getAllOrders);

router.get(uri+"/:id", orderController.getOrder);

module.exports = router;