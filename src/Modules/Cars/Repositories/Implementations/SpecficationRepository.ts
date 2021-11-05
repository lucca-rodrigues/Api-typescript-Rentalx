import { SpecificationModel } from "../Models/SpecificationModel";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: SpecificationModel[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new SpecificationModel();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): SpecificationModel {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationRepository };
