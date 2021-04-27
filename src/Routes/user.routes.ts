import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../Modules/Accounts/UseCases/CreateUser/CreateUserController';

// import { uploadConfig } from '../config/upload';
// import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const usersRoutes = Router();

// const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);
// usersRoutes.patch(
//   '/avatar',
//   ensureAuthenticated,
//   uploadAvatar.single('avatar'),
//   updateUserAvatarController.handle,
// );

export { usersRoutes };
