const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  return strNums.map((num) => {
    const parsedNum = parseInt(num);

    if (isNaN(parsedNum)) {
      throw new BadRequestError(`${num} is not a number.`);
    }

    return parsedNum;
  });
}

//TODO: difference between Number.isNaN() vs isNaN()
module.exports = { convertStrNums };
