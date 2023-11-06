export const roundDecimalNumber = (value: number, decimals: number) => {
  return Number(
    Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals),
  );
};
