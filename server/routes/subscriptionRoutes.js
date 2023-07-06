import express from "express";
import subscriptionController from "../controllers/subscriptionController";

const router = express.Router();

const uri = "/email-subscription";

router.post(uri+"/subscribe", subscriptionController.subscribe);

module.exports = router;