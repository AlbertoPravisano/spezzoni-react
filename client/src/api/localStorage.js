/**
 *
 * @param {string} key
 * @param {*} defaultValues
 * @returns
 */
export const getValuesFromLocalStorage = (key, defaultValues) => {
  let defaultCredentials = defaultValues;
  try {
    defaultCredentials = JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    console.log(e);
  }
  return defaultCredentials;
};

/**
 *
 * @param {string} key
 * @param {*} value
 * @returns {void}
 */
export const setValueToLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));
