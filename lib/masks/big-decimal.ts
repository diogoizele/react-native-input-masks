export function bigDecimalFormat(text: string) {
  if (!text) return "";

  const [intPart, decPart] = text.split(",");

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (text === ",") {
    return "0,";
  }

  if (text.endsWith(",")) {
    return formattedInt + ",";
  }

  if (decPart !== undefined) {
    return formattedInt + "," + decPart;
  }

  return formattedInt;
}

export function bigDecimalParse(text: string, decimalPlaces: number = 2) {
  const cleaned = text.replace(/[^\d,]/g, "");

  const parts = cleaned.split(",");
  if (parts.length > 2) {
    return parts[0] + "," + parts.slice(1, decimalPlaces + 1).join("");
  }

  const commaIndex = cleaned.indexOf(",");

  if (commaIndex === -1) {
    return cleaned;
  }

  return cleaned.slice(0, commaIndex + decimalPlaces + 1);
}
