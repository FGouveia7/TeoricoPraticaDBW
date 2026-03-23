import express from "express";
import { getIndex, getForm, getBootstrap, getJavaScript } from "../controllers/homeController.js";
const router = express.Router();
router.get("/", getIndex);
router.get("/form", getForm);
router.get("/BootstrapExm", getBootstrap);
router.get("/JavaScriptExm", getJavaScript);
export default router;  