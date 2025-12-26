import { bigDecimalFormat, bigDecimalParse } from "./big-decimal";
import { cpfFormat, cpfParse } from "./cpf";
import { decimalFormat, decimalParse } from "./decimal";
import { phoneFormat, phoneParse } from "./phone";

export default {
  phone: {
    format: phoneFormat,
    parse: phoneParse,
  },
  cpf: {
    format: cpfFormat,
    parse: cpfParse,
  },
  decimal: {
    format: decimalFormat,
    parse: decimalParse,
  },
  "big-decimal": {
    format: bigDecimalFormat,
    parse: bigDecimalParse,
  },
};
