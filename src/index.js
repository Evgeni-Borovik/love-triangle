/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count_lovers = 0;
  preferences.forEach(function (k, n) {
    var first_lover = n + 1;
    var second_lover = k;
    var third_lover = preferences[second_lover - 1];
    if (first_lover === preferences[third_lover - 1]) {
      count_lovers++;
    };
  })
  var triangles = Math.floor(count_lovers / 3);
  return triangles;
};
