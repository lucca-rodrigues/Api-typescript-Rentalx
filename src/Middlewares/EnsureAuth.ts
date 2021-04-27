import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../Errors/AppError';

import { UsersRepository } from '../Modules/Accounts/Repositories/Implementations/UserRepository';

interface ITokenPayload {
  sub: string;
}

export async function EnsureAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '9970383976148455904e2332d57720bc',
    ) as ITokenPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    return next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}
