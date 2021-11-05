import { Router } from "express";
import { SpecificationRepository } from "../Modules/Cars/Repositories/SpecficationRepository";
import { CreateSpecificationService } from "../Modules/Cars/Services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
