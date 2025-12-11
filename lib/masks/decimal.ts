import Decimal from "decimal.js";

export function decimalFormat(
  value: string,
  decimalPlaces: number = 2,
  decimalSeparator: "," | "." = ","
) {
  if (value === "") {
    return value;
  }
  if (
    (value.length === decimalPlaces + 1 && value[0] === "0") ||
    Number.isNaN(Number(value))
  ) {
    return "0";
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

  let decimalValue = new Decimal(sanitized);

  decimalValue = decimalValue.dividedBy(new Decimal(10).pow(decimalPlaces));

  return decimalValue.toFixed(decimalPlaces);
}
