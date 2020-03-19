/**
 * 心形
 */

import Path, { PathProps } from '../Path';

class HeartShape {
    cx = 0
    cy = 0
    width = 0
    height = 0
}

interface HeartProps extends PathProps {
    shape?: Partial<HeartShape>
}
export default class Heart extends Path<HeartProps> {

    type = 'heart'

    shape: HeartShape

    constructor(opts?: HeartProps) {
        super(opts, null, new HeartShape())
    }

    buildPath(ctx: CanvasRenderingContext2D, shape: HeartShape) {
        const x = shape.cx;
        const y = shape.cy;
        const a = shape.width;
        const b = shape.height;
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(
            x + a / 2, y - b * 2 / 3,
            x + a * 2, y + b / 3,
            x, y + b
        );
        ctx.bezierCurveTo(
            x - a * 2, y + b / 3,
            x - a / 2, y - b * 2 / 3,
            x, y
        );
    }
}