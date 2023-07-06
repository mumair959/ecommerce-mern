import express from "express";
import invoiceController from "../controllers/invoiceController";

const router = express.Router();

const uri = "/invoice";

router.get(uri+"/", invoiceController.getAllInvoices);

router.get(uri+"/:id", invoiceController.getInvoice);

module.exports = router;