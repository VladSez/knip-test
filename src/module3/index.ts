import { subtract } from "../module2/index.js";

// this is NOT reported by knip, because we don't import anything from 'module3/index.ts'
export function calculate(a: number, b: number) {
  return subtract(a, b);
}

// this is NOT reported by knip, because we don't import anything from 'module3/index.ts'
export const smth = 3443;
