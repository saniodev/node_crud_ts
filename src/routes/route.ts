import express from "express";
import swaggerRouter from "./swaggerRouter";

import userRouter from "./userRouter";

const router = express.Router();

router.use("/swagger", swaggerRouter);

router.use("/user", userRouter);

export default router;
