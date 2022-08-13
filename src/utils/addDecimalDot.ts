export const addDecimalDot = (number: number) => {
  let stringValue = number.toString();
  let valueWithDot: string = '0';
  if (stringValue.length === 2) {
    valueWithDot = `${stringValue.slice(1, 1)}.${stringValue.slice(0)}`;
    return parseFloat(valueWithDot);
  }

  valueWithDot = `${stringValue.slice(
    0,
    stringValue.length - 2
  )}.${stringValue.slice(stringValue.length - 2)}`;
  return parseFloat(valueWithDot);
};
