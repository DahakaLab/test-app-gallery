import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { isRight } from 'fp-ts/lib/Either';

const iTypescriptCheck = (IOType: t.Type<any>, data: object | any[]): boolean => {
  const result = IOType.decode(data);
  // eslint-disable-next-line
  if (!isRight(result)) console.error(PathReporter.report(result));
  return isRight(result);
};

export default iTypescriptCheck;
