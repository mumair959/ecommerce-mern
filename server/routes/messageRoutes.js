import express from "express";
import messageController from "../controllers/messageController";

const router = express.Router();

const uri = "/message";

router.get(uri+"/", messageController.getAllMessages);

router.get(uri+"/:id", messageController.getMessage);

router.post(uri+"/", messageController.createMessage);

router.delete(uri+"/:id", messageController.deleteMessage);

module.exports = router;