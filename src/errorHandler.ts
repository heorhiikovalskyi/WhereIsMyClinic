import { GraphQLError } from 'graphql';
import { MyError } from './interfaces';

export const errorHandler = (err: GraphQLError) => {
  const originalError = err.originalError as MyError;
  return {
    message: originalError?.thrownValue?.message || err.message,
    code: originalError?.thrownValue?.code || 400,
  };
};
