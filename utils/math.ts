export function decimalToFraction(decimal: number): string {
  let numerator: number = decimal;
  let denominator: number = 1;

  while (numerator % 1 !== 0) {
    numerator *= 10;
    denominator *= 10;
  }

  const gcd = function (a: number, b: number): number {
    return b == 0 ? a : gcd(b, a % b);
  };
  const divisor: number = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;

  return `${numerator} / ${denominator}`;
}
