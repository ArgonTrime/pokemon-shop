export const statNormolize = (arrayStat) => {
  return arrayStat?.map(({ title, value }) => [title, value]);
};
