export const splitCamelCase = (word) => {
  return word
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLowerCase();
};
