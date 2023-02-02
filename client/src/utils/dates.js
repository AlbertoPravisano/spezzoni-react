export const isOverEighteen = (date) => {
  const ageDifMs = Date.now() - new Date(date).getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (age > 17) {
    return true;
  } else {
    return false;
  }
};

const fromMillisToYYYYMMDD = (dateInMillis) => {
  const date = new Date(dateInMillis); // Date 2011-05-09T06:08:45.178Z
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

/**
 *
 * @returns data 18 anni fa in formato YYYY-MM-dd
 */
export const getDataMinimaMaggiorenne = () => {
  const dataOggi = new Date();
  return fromMillisToYYYYMMDD(
    dataOggi.setFullYear(dataOggi.getFullYear() - 18)
  );
};
