//
import { Router } from "express";
//
const router = Router();
//
import * as index from "../controllers";
//
//
// ================================================
router.get("/test", index.test);
//
router.get("/msgs/:channelName", index.getMsgs);
router.post("/msgs/pushMsg", index.pushMsg);
//
router.get("/data/:key", index.getData);
router.post("/data", index.setData);
// ================================================
//
//
export default router;
