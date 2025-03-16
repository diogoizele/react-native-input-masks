export function phoneFormat(value: string) {
  const len = value.length;
  let formattedValue = value;

  if (len > 0 && len < 3) {
    formattedValue = `(${value}`;
  } else if (len >= 3 && len < 7) {
    const firstPart = value.slice(0, 2);
    const secondPart = value.substring(2, len);
    formattedValue = `(${firstPart}) ${secondPart}`;
  } else if (len > 6 && len < 11) {
    const firstPart = value.slice(0, 2);
    const number = value.substring(2, len);
    const secondPart = number.slice(0, 4);
    const thirdPart = number.substring(4, number.length);

    formattedValue = `(${firstPart}) ${secondPart}-${thirdPart}`;
  } else if (len >= 11) {
    const firstPart = value.slice(0, 2);
    const number = value.substring(2, 11);
    const secondPart = number.slice(1, 5);
    const thirdPart = number.substring(5, number.length);

    formattedValue = `(${firstPart}) ${number[0]} ${secondPart}-${thirdPart}`;
  }

  return formattedValue;
}

export function phoneParse(value: string) {
  return value.split("").reduce((string, char) => {
    if (!isNaN(parseInt(char))) {
      string += char;
    }

    return string;
  }, "");
}
