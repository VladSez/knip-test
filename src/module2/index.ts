export function subtract(a: number, b: number) {
  return a - b;
}

// this is reported by knip, because we import 'subtract()' at 'module3/index.ts
export const test = 23;
