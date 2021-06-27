/**
 * For injecting the slope values of the animation to a bot whose movement will be based on the animated code
 */

let p1 = [0, 0],
  p2 = [],
  p3 = [],
  p4 = [1, 1];

const getCurvePoints = (t, X, Y) => {
  const x =
    Math.pow(1 - t, 3) * X[0] +
    3 * Math.pow(1 - t, 2) * t * X[1] +
    3 * (1 - t) * Math.pow(t, 2) * X[2] +
    Math.pow(t, 3) * X[3];
  const y =
    Math.pow(1 - t, 3) * Y[0] +
    3 * Math.pow(1 - t, 2) * t * Y[1] +
    3 * (1 - t) * Math.pow(t, 2) * Y[2] +
    Math.pow(t, 3) * Y[3];
  return [x, y];
};

const getSlope = (point, previous_point) => {
  [x1, y1] = [point[0], point[1]];
  [x2, y2] = [previous_point[0], previous_point[1]];
  return (y2 - y1) / (x2 - x1);
};

const generateIntervalSets = (interval) => {
  step_value = 1 / interval;
  return Array(interval + 1)
    .fill()
    .map((_, index) => Number((step_value * index).toFixed(2)));
};

const getSlopeList = (bezier_vals) => {
  let curvePoints = [];
  let slopesList = [];
  const interval_set = generateIntervalSets(3);
  const X = [
    bezier_vals[0][0],
    bezier_vals[1][0],
    bezier_vals[2][0],
    bezier_vals[3][1],
  ];
  const Y = [
    bezier_vals[0][1],
    bezier_vals[1][1],
    bezier_vals[2][1],
    bezier_vals[3][1],
  ];
  interval_set.forEach((val) => {
    curvePoints.push(getCurvePoints(val, X, Y));
  });
  console.log("interval_sets: ", interval_set);
  console.log("curve points: ", curvePoints);
  for (let i = 1; i < curvePoints.length; i++) {
    slopesList.push(getSlope(curvePoints[i], curvePoints[i - 1]));
  }
  return slopesList;
};
