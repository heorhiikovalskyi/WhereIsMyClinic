export interface MyError extends Error {
  thrownValue: { message: string; code: number };
}
