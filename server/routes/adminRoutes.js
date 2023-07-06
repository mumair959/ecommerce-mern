import express from "express";
import { login } from "../controllers/adminController";

const router = express.Router();

const uri = "/admin";

// ENDPOINTS
router.post(uri+'/login', login);

module.exports = router;