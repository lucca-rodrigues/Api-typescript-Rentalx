import { Router } from "express";
import { SpecificationRepository } from "../Modules/Cars/Repositories/Implementations/SpecficationRepository";
import { CreateSpecificationUseCase } from "../Modules/Cars/UseCases/CreateSpecification/CreateSpecificationUseCase";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository
  );

  createSpecificationUseCase.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };
