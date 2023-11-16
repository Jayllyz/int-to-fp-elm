import * as drawlib from "./drawlib.js";
import * as color from "./color.js";

/**
 * @throws {string}
 * @returns {CanvasRenderingContext2D}
 * @param {string} id
 */
function get2DContextById(id) {
  const canvas = document.getElementById(id);
  if (canvas === null) {
    throw "No html element with id `canvas` found";
  }
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw "The selected element is not a canvas";
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      return ctx;
    } else {
      throw "Error when getting the context";
    }
  } else {
    throw "`getContext` is not a property of the element. Please use a modern browser.";
  }
}

const BODY_COLOR = color.grey;

const tree = drawlib.group([
  drawlib.rectangle(color.brown, 20, 60),
  drawlib.move(0, -20, drawlib.circle(color.green, 30)),
]);

const forest = drawlib.group([
    drawlib.move(0, -60, tree),
    drawlib.move(100, -50, tree),
    drawlib.move(-100, -30, tree),
    drawlib.move(200, -20, tree),
]);


const head = drawlib.group([
drawlib.polygon(BODY_COLOR, [
    { x: -20, y: -20 },
    { x: -30, y: 0 },
    { x: 0, y: 20 },
    { x: 30, y: 0 },
    { x: 20, y: -20 },
]),
drawlib.move(-10, -10, drawlib.square(color.black, 7)),
drawlib.move(10, -10, drawlib.square(color.black, 7)),
drawlib.polygon(color.blue, [
    { x: -4, y: 0 },
    { x: 4, y: 0 },
    { x: 0, y: 3 },
]),
drawlib.move(0, 10, drawlib.rectangle(color.pink, 15, 3)),
]);

const body = drawlib.group([
drawlib.circle(color.lightGrey, 40),
]);


const sheep = drawlib.group([
// legs
drawlib.move(20, 200, drawlib.rectangle(BODY_COLOR, 9, 50)),
drawlib.move(37, 210, drawlib.rectangle(BODY_COLOR, 9, 50)),
drawlib.move(95, 200, drawlib.rectangle(BODY_COLOR, 9, 50)),
drawlib.move(107, 210, drawlib.rectangle(BODY_COLOR, 9, 50)),

// body
drawlib.move(45, 160, body),
drawlib.move(45, 135, body),
drawlib.move(110, 162, body),
drawlib.move(90, 137, body),

drawlib.move(0, 150, head),
]);


/**
 * @param {number} x
 * @param {number} y
 * @returns {*}
 */
function placeSheep(x, y) {
  return drawlib.move(x, y, sheep);
}


function main() {
  const context = get2DContextById("canvas");
  drawlib.renderCentered(forest, context);
  drawlib.renderCentered(placeSheep(0, 45), context);
  drawlib.renderCentered(placeSheep(160, 0), context);
}
main();
