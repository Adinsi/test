export const dateParser = (num) => {
  let options = {
    // hour: "2-digit",
    // minute: "2-digit",

    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let timestatmp = Date.parse(num);
  let date = new Date(timestatmp).toLocaleDateString("bj-BJ", options);
  return date.toString();
};

export const isempty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const timestamParser = (num) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let date = new Date(num).toLocaleDateString("bj-BJ", options);
  return date.toString();
};
