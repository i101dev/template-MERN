//
import { Router } from "express";
import { RT } from "../../../__PKG__/exp";
//
const router = Router();
//
import { register, login, tokenCheck } from "../controllers/auth";
import { authenticateToken } from "../middlewares/authToken";
//
//
// ================================================
router.post(RT.POST.login, login);
router.post(RT.POST.register, register);
router.post(RT.POST.checkToken, authenticateToken, tokenCheck);
// ================================================
//
//
export default router;
