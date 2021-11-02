import { ICreateUserDTO } from '../Dtos/ICreateUserDTO';
import { User } from '../Entities/User';

interface IUsersRepository {
  create(user: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}

export { IUsersRepository };
