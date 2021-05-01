import { MyContext } from './types/MyContext';
import { MiddlewareFn } from 'type-graphql';
import { verify } from 'jsonwebtoken';

//bearer adlkfadadfad
export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];
  if (!authorization) throw new Error('not authenticated.');
  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    throw new Error('not authenticated.');
  }
  return next();
};
