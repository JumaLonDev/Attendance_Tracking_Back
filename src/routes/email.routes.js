import { Router } from "express";

const email = require("../controllers/email.controller")
const auth = require('../middleware/auth');
const router = Router();

router.post("/email",auth.verifyToken,email.sendEmailAdve)

export default router; 