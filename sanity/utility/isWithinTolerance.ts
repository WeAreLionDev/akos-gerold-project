export const isWithinTolerance = (a: number, b: number, tolerance = 0.01) =>
  a - b < tolerance ? a - b > -tolerance : false;
