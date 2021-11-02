import { Router } from 'express';
import multer from 'multer';
import { uploadConfig } from '../Config/Upload';
import { EnsureAuth } from '../Middlewares/EnsureAuth';

import { CreateUserController } from '../Modules/Accounts/UseCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '../Modules/Accounts/UseCases/UpdateUserAvatar/UpdateUSerAvatarController';

const usersRoutes = Router();


const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  EnsureAuth,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
