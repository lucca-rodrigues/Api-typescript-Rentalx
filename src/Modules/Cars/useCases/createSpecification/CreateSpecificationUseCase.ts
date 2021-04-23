import { ISpecificationRepository } from "../../Repositories/ISpecificationRepository";
import { inject, injectable} from "tsyringe";


interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}
  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationExists) {
      throw new Error("Specification already exists.");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export {CreateSpecificationUseCase}
