import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { SpecificationRepository };
