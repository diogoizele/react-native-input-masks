export function cpfFormat(value: string) {
  const len = value.length;
  let formattedValue = value;

  if (len > 3 && len <= 6) {
    const firstPart = value.slice(0, 3);
    const secondPart = value.slice(3, len);
    formattedValue = `${firstPart}.${secondPart}`;
  } else if (len > 6 && len <= 9) {
    const firstPart = value.slice(0, 3);
    const secondPart = value.slice(3, 6);
    const thirdPart = value.slice(6, len);

    formattedValue = `${firstPart}.${secondPart}.${thirdPart}`;
  } else if (len > 9) {
    const firstPart = value.slice(0, 3);
    const secondPart = value.slice(3, 6);
    const thirdPart = value.slice(6, 9);
    const verifyDigits = value.slice(9, 11);

    formattedValue = `${firstPart}.${secondPart}.${thirdPart}-${verifyDigits}`;
  }

  return formattedValue;
}

export function cpfParse(value: string) {
  return value.split("").reduce((string, char) => {
    if (!isNaN(parseInt(char))) {
      string += char;
    }

    return string;
  }, "");
}
