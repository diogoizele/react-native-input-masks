import { cpfFormat, cpfParse } from "./cpf";
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
};
