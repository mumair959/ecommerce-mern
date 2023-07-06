import express from "express";
import authController from "../controllers/authController";

const router = express.Router();

const uri = "/auth";

// ENDPOINTS
router.post(uri+'/register', authController.register);

router.post(uri+'/login', authController.login);

module.exports = router;