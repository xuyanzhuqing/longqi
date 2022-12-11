import type { ArrayXY } from "@svgdotjs/svg.js"

export const middle = (a: ArrayXY, b: ArrayXY): ArrayXY => {
  return [
    (a[0] + b[0]) / 2,
    (a[1] + b[1]) / 2,
  ]
}