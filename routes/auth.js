import express from "express";
import { register, login, logout } from "../controllers/auth.js";
import { admin_register, admin_login, admin_logout } from "../controllers/admin.js";

const router = express.Router();

//for customes_login table
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

//for admin_login table
router.post("/admin/register", admin_register);
router.post("/admin/login", admin_login);
router.post("/admin/logout",admin_logout);
export default router;