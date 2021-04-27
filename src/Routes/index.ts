import { Router } from "express";
import { categoriesRoutes } from "./Categories.routes";
import { specificationsRoutes } from "./Specification.routes";
import { usersRoutes } from "./user.routes";

const router = Router()
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);

export { router };
