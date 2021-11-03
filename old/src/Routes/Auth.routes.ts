import { Router } from "express";

import { AuthUserController } from "../Modules/Accounts/UseCases/Auth/AuthUserController";

const authRoutes = Router();

const authUserController = new AuthUserController();

authRoutes.post("/sessions", authUserController.handle);

export { authRoutes };
