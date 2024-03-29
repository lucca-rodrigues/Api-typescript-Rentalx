import { Router } from "express";
import { createSpecificationController } from "../Modules/Cars/UseCases/CreateSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
