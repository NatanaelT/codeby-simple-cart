import { addDecimalDot } from './addDecimalDot';
import { convertNumberToMoney } from './convertNumberToMoney';

export const convertNumberToDecimalAndMoney = (value: number) => {
  let parsedValueWithDot = addDecimalDot(value);
  let moneyValue = convertNumberToMoney(parsedValueWithDot);
  return moneyValue;
};
