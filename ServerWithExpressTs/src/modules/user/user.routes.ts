import express, { Request, Response } from "express";
import { userControllers } from "./user.controller";
import logger from "../../middlewares/logger";
import auth from "../../middlewares/auth";

const router = express.Router();

// app.use("/users", userRoutes)

// routes -> controller -> service

router.post("/", userControllers.createUser);

router.get("/", logger, auth("admin"), userControllers.getUser);

router.get("/:id", auth("admin", "user"), userControllers.getSingleUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
