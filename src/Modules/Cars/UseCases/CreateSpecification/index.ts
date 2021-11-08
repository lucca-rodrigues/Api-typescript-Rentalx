import { SpecificationRepository } from "../../Repositories/Implementations/SpecficationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const specificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { specificationController };
