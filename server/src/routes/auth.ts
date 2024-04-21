//
import { Router } from "express";
import { RT } from "../../../__PKG__/X";
//
const router = Router();
//
import { register, login } from "../controllers/auth";
//
//
// ================================================
router.post(RT.POST.login, login);
router.post(RT.POST.register, register);
// ================================================
//
//
export default router;
