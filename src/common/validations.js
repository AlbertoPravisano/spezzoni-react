export const isValorizzato = (dato) => dato !== undefined && dato !== null;

export const isStringaValorizzata = (stringa) =>
  stringa !== undefined &&
  stringa !== null &&
  typeof stringa === "string" &&
  stringa.length > 0;
