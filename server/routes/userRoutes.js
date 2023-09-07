import express from "express";
import userController from "../controllers/userController";
import { requireSignin } from "../middlewares/auth";

const router = express.Router();

const uri = "/user";

router.get(uri+"/get-auth-user-details", requireSignin, userController.getUserDetails);

router.put(uri+"/update-user-info", requireSignin, userController.updateUserDetails);

module.exports = router;