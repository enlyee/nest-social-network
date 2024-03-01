import { Transform, TransformFnParams } from 'class-transformer';

export const PositiveInteger = () =>
  Transform(({ value }: TransformFnParams) => value?.trim());
