type FormatFn = (a: Date) => string;

const D_MMMM: FormatFn = date => {
  const options = { month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("ru", options).format(date);
};

const YYYY_MM_DD: FormatFn = date => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Intl.DateTimeFormat("ru", options).format(date);
};

const YYYY_MM_DD_2: FormatFn = date => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formatDate = new Intl.DateTimeFormat("ru", options).format(date);

  return formatDate
    .split(".")
    .reverse()
    .join("-");
};

const D_DDDD: FormatFn = date => {
  const options = { day: "numeric", weekday: "long" };
  const formatDate = new Intl.DateTimeFormat("ru", options).format(date);
  // приводим к виду "дата день_недели"
  return formatDate
    .split(", ")
    .reverse()
    .join(" ");
};

const MMMM_YYYY: FormatFn = date => {
  const options = { year: "numeric", month: "long" };
  const formatDate = new Intl.DateTimeFormat("ru", options).format(date);
  return formatDate.slice(0, -3); // обрезаем ' г.'
};

export const dateFormat = {
  D_MMMM,
  YYYY_MM_DD,
  YYYY_MM_DD_2,
  D_DDDD,
  MMMM_YYYY
};
