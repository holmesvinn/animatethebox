// //filter the unique Y coordinate since the object is made to move in a vertical direction
// const filterYCoordsunique = (uniqueRound) => {
//   let yCoordsUnique = [];
//   for (let j = 1; j < uniqueRound.length; j++) {
//     if (uniqueRound[j].y != uniqueRound[j - 1].y) {
//       yCoordsUnique.push(uniqueRound[j]);
//     }
//   }
// };
// //round off and finds the elapsed time by subtracting with the initial time
// const roundOffWithElapsedTime = (uniqueVals) => {
//   let uniqueRoundOFF = [];
//   const initValue = {
//     x: Math.ceil(uniqueVals[0].x),
//     y: Math.ceil(uniqueVals[0].y),
//     timeStamp: uniqueVals[0].timeStamp,
//   };
//   uniqueVals.forEach((val, index) => {
//     if (index != 0)
//       uniqueRoundOFF.push({
//         x: Math.ceil(val.x) - initValue.x,
//         y: Math.ceil(val.y) - initValue.y,
//         elapsed: initValue.timeStamp - val.timeStamp,
//       });
//   });
// };

// //filters the unique coordinates
// const filterUniqueCoords = (positions) => {
//   const uniquePositions = [positions[0]];
//   for (let i = 1; i < positions.length; i++) {
//     let previousPositions = positions[i - 1];
//     if (
//       positions[i].x != previousPositions.x ||
//       positions[i].y != previousPositions.y
//     ) {
//       uniquePositions.push(positions[i]);
//     }
//   }
// };
