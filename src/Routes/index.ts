import { Router } from "express";
import { categoryRoutes } from "./CategoryRoutes";
import { specificationRoutes } from "./SpecificationRoutes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);

export { router };
