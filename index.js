/**
 * @param offset - UTC offset
 * @param date - local date object
 * @returns {Date}
 */
module.exports = (offset, date = new Date()) => {
  // Convert date to milliseconds and add local timezone offset in milliseconds
  const UTC = date.getTime() + (date.getTimezoneOffset() * 60000);

  // create new Date object with utc offset
  // using supplied offset, convert offset hours to milliseconds (60 * 60 * 1000)
  return new Date(UTC + (3600000 * offset));
};
