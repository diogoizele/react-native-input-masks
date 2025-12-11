import Decimal from "decimal.js";

export function decimalFormat(
  _value: string,
  decimalPlaces: number = 2,
  decimalSeparator: "," | "." = ","
) {
  const value = String(_value);
  if (value === "") {
    return value;
  }

  if (value[0] === "0" || Number.isNaN(Number(value))) {
    return "";
  }

  let decimalValue = new Decimal(value);

  decimalValue = decimalValue.dividedBy(new Decimal(10).pow(decimalPlaces));

  let formattedValue = decimalValue.toFixed(decimalPlaces);

  if (decimalSeparator === ",") {
    formattedValue = formattedValue.replace(".", ",");
  }

  return formattedValue;
}

export function decimalParse(_value: string) {
  const stringified = String(_value);
  const sanitized = stringified.replace(/[^0-9]/g, "");
  return Number(sanitized);
}

export function rawToDecimal(_value: string, decimalPlaces: number = 2) {
  if (_value === "") {
    return _value;
  }

  const stringified = String(_value);

  const sanitized = stringified.replace(/[^0-9]/g, "");
  const value = Number(sanitized) ?? 0;

  let decimalValue = new Decimal(value);

  decimalValue = decimalValue.dividedBy(new Decimal(10).pow(decimalPlaces));

  return decimalValue.toFixed(decimalPlaces);
}
