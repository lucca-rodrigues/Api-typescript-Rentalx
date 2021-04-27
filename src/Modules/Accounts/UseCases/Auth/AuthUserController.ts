import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthUserUseCase';

class AuthUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const { user, token } = await authenticateUserUseCase.execute({ email, password });

    return res.json({ user, token });
  }
}

export { AuthUserController };
