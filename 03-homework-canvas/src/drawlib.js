import * as Color from './color.js';

/**
 * @typedef { Color.Color} Color
 * 
 * The following type definition is meant to be "opaque".
 * That mean that users of `drawlib` will be able to use the `Shape` type
 * but are discouraged to build shapes directly as this representation
 * in terms of `Square/Circle/Group` might change in the future 
 * (and actually, it will! See the part 2 of the homework!)
 * 
 * Users of the lib should build the shapes with helper functions such as
 * `square`, `circle` or `group`.
 * @typedef {
   | {kind: "Square";color: Color;side : number; xCenter: number; yCenter:number }
   | {kind: "Circle";radius: number;color: Color; xCenter: number; yCenter: number}
   | {kind: "Group"; shapes : Array<Shape>}
   | {kind: "Polygon"; color: Color; points: Array<{x:number;y:number}>}
   } Shape
*/

/**
 * @param {Color} color
 * @param {number} side
 * @returns {Shape}
 */
export function square(color, side) {
  return rectangle(color, side, side);
}

/**
 * @param {Color} color
 * @param {number} radius
 * @returns {Shape}
 */
export function circle(color, radius) {
  return { kind: 'Circle', radius, color, xCenter: 0, yCenter: 0 };
}

/**
 * @param {Array<Shape>} shapes
 * @returns {Shape}
 */
export function group(shapes) {
  return { kind: 'Group', shapes };
}

/**
 * 
 * @param {Color} color
 * @param {Array<{x:number;y:number}>} points
 * @returns {Shape}
 */
export function polygon(color, points) {
  return { kind: 'Polygon', color, points };
}

/**
 * Add `dx` and `dy` respectively to the `x` and `y` of
 * the shape. Apply this to all the sub shapes if the given one
 * is a "Group"
 * @param {number} dx
 * @param {number} dy
 * @param {Shape} shape
 * @returns {Shape}
 */
export function move(dx, dy, shape) {
  switch (shape.kind) {
    case 'Circle':
      return { ...shape, xCenter: shape.xCenter + dx, yCenter: shape.yCenter + dy };

    case 'Group':
      return { ...shape, shapes: shape.shapes.map((shape) => move(dx, dy, shape)) };

    case 'Polygon':
      return { ...shape, points: shape.points.map((point) => ({ x: point.x + dx, y: point.y + dy })) };
    default:
      throw 'Unexpected! Some case is missing';
  }
}

/**
 * @param {CanvasRenderingContext2D} context
 * @param {Shape} shape
 * @returns {void}
 */
export function renderCentered(shape, context) {
  const width = context.canvas.width;
  const height = context.canvas.height;
  render(move(width / 2, height / 2, shape), context);
}

/**
 * @param {CanvasRenderingContext2D} context
 * @param {Shape} shape
 * @returns {void}
 */
function render(shape, context) {
  switch (shape.kind) {
    case 'Circle':
      renderCircle(shape.color, shape.xCenter, shape.yCenter, shape.radius, context);
      break;
    case 'Group':
      shape.shapes.forEach((shape) => render(shape, context));
      break;
    case 'Polygon':
      renderPolygon(shape.color, shape.points, context);
      break;
    default:
      throw 'Unexpected! Some case is missing';
  }
}

/**
 * @param {Color} color
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {CanvasRenderingContext2D} context
 */
function renderCircle(color, xCenter, yCenter, radius, context) {
  const height = radius * 2;
  context.beginPath();

  context.moveTo(xCenter, yCenter - height / 2);

  context.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);

  context.fillStyle = Color.render(color);
  context.fill();
  context.closePath();
}

/**
 * @param {Color} color
* @param {Array<{x:number;y:number}>} points
* @param {CanvasRenderingContext2D} context
*/
function renderPolygon(color, points, context) {
  context.fillStyle = Color.render(color);
  context.fill(polygonToPath(points));
}

/**
* @returns {Path2D}
* @param {Array<{x:number;y:number}>} points
*/
function polygonToPath(points) {
  const path = new Path2D();
  path.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    path.lineTo(points[i].x, points[i].y);
  }
  path.closePath();
  return path;
} 

/**
 * @param {Color} color
 * @param {number} width
 * @param {number} height
 * @returns {Shape}
 */
export function rectangle(color, width, height) {
  return polygon(color, [
    { x: -width / 2, y: -height / 2 },
    { x: width / 2, y: -height / 2 },
    { x: width / 2, y: height / 2 },
    { x: -width / 2, y: height / 2 },
  ]);
}