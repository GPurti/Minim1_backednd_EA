import { Request, Response, Router } from "express";
import {getAllLogs, postLog, updateLog, deleteLog, getTheLog } from "../controllers/logs";
const router = Router(); 

router.get("/all", getAllLogs);
router.get("/:idLog", getTheLog);
router.post("/",postLog);
router.put("/:idLog",updateLog);
router.delete("/:idLog",deleteLog);

export {router};