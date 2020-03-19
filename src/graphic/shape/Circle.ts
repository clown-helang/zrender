/**
 * 圆形
 */

import Path, { PathProps } from '../Path';

class CircleShape {
    cx = 0
    cy = 0
    r = 0
}

interface CircleProps extends PathProps {
    shape?: Partial<CircleShape>
}
export default class Circle extends Path<CircleProps> {

    type = 'Circle'

    shape: CircleShape

    constructor(opts?: CircleProps) {
        super(opts, null, new CircleShape())
    }


    buildPath(ctx: CanvasRenderingContext2D, shape: CircleShape, inBundle: boolean) {
        // Better stroking in ShapeBundle
        // Always do it may have performence issue ( fill may be 2x more cost)
        if (inBundle) {
            ctx.moveTo(shape.cx + shape.r, shape.cy);
        }
        // else {
        //     if (ctx.allocate && !ctx.data.length) {
        //         ctx.allocate(ctx.CMD_MEM_SIZE.A);
        //     }
        // }
        // Better stroking in ShapeBundle
        // ctx.moveTo(shape.cx + shape.r, shape.cy);
        ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2, true);
    }
};