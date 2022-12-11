import type { ArrayXY, PointArrayAlias, Svg } from "@svgdotjs/svg.js";
import { SVG } from '@svgdotjs/svg.js'
import { PLAYGROUND_SIZE, PIECE_SIZE, CLICK_PIECE_SIZE } from "../constant";
import { OuterSpot, MidSpot, InnerSpot, Spot } from './spot'

export class Playground {
	private _draw: Svg

	get width () {
		return PLAYGROUND_SIZE + PIECE_SIZE * 2
	}

	get height () {
		return PLAYGROUND_SIZE + PIECE_SIZE * 2
	}

	private _outer!: Spot
	private _mid!: Spot
	private _inner!: Spot

	get outer () {
		return this._outer
	}

	get mid () {
		return this._mid
	}

	get inner () {
		return this._inner
	}

	constructor (selector: string) {
		this._outer = new OuterSpot()
		this._mid = new MidSpot()
		this._inner = new InnerSpot()

		var draw = SVG().addTo(selector).size(this.width, this.height)
		this._draw = draw
		this.render()
	}

	get draw () {
		return this._draw
	}

	get spots () {
		const { outer, mid, inner } = this
		return [
			...outer.spots,
			...mid.spots,
			...inner.spots
		]
	}

	get lines () {
		const { outer, mid, inner } = this

		const outerLines = outer.outlines
		const midLines = mid.outlines
		const innerLines = inner.outlines

		const linkLines: ArrayXY[][] = [
			[outer.AB, mid.AB],
			[mid.AB, inner.AB],
			[outer.BC, mid.BC],
			[mid.BC, inner.BC],
			[outer.CD, mid.CD],
			[mid.CD, inner.CD],
			[outer.DA, mid.DA],
			[mid.DA, inner.DA],
			/** 斜线 */
			[outer.A, mid.A],
			[mid.A, inner.A],
			[outer.B, mid.B],
			[mid.B, inner.B],
			[outer.C, mid.C],
			[mid.C, inner.C],
			[outer.D, mid.D],
			[mid.D, inner.D],
		]
		return {
			outerLines,
			midLines,
			innerLines,
			linkLines
		}
	}

	public render () {
		const draw = this.draw
		var rect = draw.rect(this.width, this.height).attr({ fill: 'grey' })
		const { outerLines, midLines, innerLines, linkLines } = this.lines
		var outline = draw.polyline(outerLines).fill('none').stroke({ width: 1 }).attr({stroke: 'red'})
		var midline = draw.polyline(midLines).fill('none').stroke({ width: 1 }).attr({stroke: 'red'})
		var inline = draw.polyline(innerLines).fill('none').stroke({ width: 1 }).attr({stroke: 'red'})
		linkLines.forEach((lines) => {
			draw.line(lines as PointArrayAlias).stroke({ width: 1 }).attr({stroke: 'red'})
		})

		const halfPiece = PIECE_SIZE / 2
		this.spots.forEach((spot) => {
			const fixed = spot.map(v => v - CLICK_PIECE_SIZE / 2) as ArrayXY
			var circle = draw
			.circle(CLICK_PIECE_SIZE)
			.move(...fixed)
			.attr({
				fill: '#fff',
				// 'fill-opacity': 0
			})
			.click(function () {
				this.fill({ color: 'red' })
			})
		})
	}
}