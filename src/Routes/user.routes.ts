import { Router } from 'express';
import { CreateUserController } from '../Modules/Accounts/UseCases/CreateUser/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
