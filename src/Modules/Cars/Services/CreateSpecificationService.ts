import { SpecificationRepository } from "../Repositories/SpecficationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
