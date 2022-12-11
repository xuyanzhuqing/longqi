import type { ArrayXY, PointArrayAlias } from "@svgdotjs/svg.js";
import { PLAYGROUND_SIZE, PIECE_SIZE } from "../constant";
import { middle } from "../utils/middle";

export abstract class Spot {
  get size () {
    return PLAYGROUND_SIZE / 6
  }

  /** 左上 */
  get A (): ArrayXY {
    return [0, 0]
  }
  /** 右上 */
  get B (): ArrayXY {
    return [0, 0]
  }
  /** 右下 */
  get C (): ArrayXY {
    return [0, 0]
  }
  /** 左下 */
  get D (): ArrayXY {
    return [0, 0]
  }

  /** 上中 */
  get AB () {
    return middle(this.A, this.B)
  }

  /** 右中 */
  get BC () {
    return middle(this.B, this.C)
  }
  /** 下中 */
  get CD () {
    return middle(this.C, this.D)
  }
  /** 左中 */
  get DA () {
    return middle(this.D, this.A)
  }


  get outlines () {
    const { A, B, C, D, AB, BC, CD, DA } = this
    const res: ArrayXY[] = [
			A,
      AB,
      B,
      BC,
      C,
      CD,
      D,
      DA,
      A
		]
    return res
  }

  get spots () {
    return [
      this.A,
      this.B,
      this.C,
      this.D,
      this.AB,
      this.BC,
      this.CD,
      this.DA
    ]
  }
}

// 外层
export class OuterSpot extends Spot {
  get A (): ArrayXY {
    return [PIECE_SIZE, PIECE_SIZE]
  }
  get B (): ArrayXY {
    return [PIECE_SIZE + PLAYGROUND_SIZE, PIECE_SIZE]
  }
  get C (): ArrayXY {
    return [PIECE_SIZE + PLAYGROUND_SIZE, PLAYGROUND_SIZE + PIECE_SIZE]
  }
  get D (): ArrayXY {
    return [PIECE_SIZE, PLAYGROUND_SIZE + PIECE_SIZE]
  }
}

export class MidSpot extends Spot {
  get A (): ArrayXY {
    return [PIECE_SIZE + this.size, PIECE_SIZE + this.size]
  }
  get B (): ArrayXY {
    return [PIECE_SIZE + this.size * 5, PIECE_SIZE + this.size]
  }
  get C (): ArrayXY {
    return [PIECE_SIZE + this.size * 5, PIECE_SIZE + this.size * 5]
  }
  get D (): ArrayXY {
    return [PIECE_SIZE + this.size, PIECE_SIZE + this.size * 5]
  }
}

export class InnerSpot extends Spot {
  get A (): ArrayXY {
    return [PIECE_SIZE + this.size * 2, PIECE_SIZE + this.size * 2]
  }
  get B (): ArrayXY {
    return [PIECE_SIZE + this.size * 4, PIECE_SIZE + this.size * 2]
  }
  get C (): ArrayXY {
    return [PIECE_SIZE + this.size * 4, PIECE_SIZE + this.size * 4]
  }
  get D (): ArrayXY {
    return [PIECE_SIZE + this.size * 2, PIECE_SIZE + this.size * 4]
  }
}