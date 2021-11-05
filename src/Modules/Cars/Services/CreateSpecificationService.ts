import { SpecificationRepository } from "../Repositories/SpecficationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationRepository.findByName(name);

    if (specificationExists) {
      throw new Error("Specification already exists");
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
