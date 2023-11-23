import express from "express";

import {
  createUserController,
  findAllUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController";

import {
  authName,
  authEmail,
  authPass,
} from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.post("/create", authName, authEmail, authPass, createUserController);

userRouter.get("/list", findAllUsersController);

userRouter.put(
  "/update/:id",
  authName,
  authEmail,
  authPass,
  updateUserController
);

userRouter.delete("/delete/:id", deleteUserController);

export default userRouter;
