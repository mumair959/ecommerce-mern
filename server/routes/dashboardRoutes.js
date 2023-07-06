import express from "express";
import dashboardController from "../controllers/dashboardController";
import { requireSignin } from "../middlewares/auth";

const router = express.Router();

const uri = "/dashboard";

router.get(uri+"/get-data", requireSignin, dashboardController.getDashboardData);

module.exports = router;