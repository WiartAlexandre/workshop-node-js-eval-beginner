const expect = require("chai").expect;

const exercise = require("../src/exercise2");

describe("Exercise #2", function() {
  describe("function run()", function() {
    it("should return a number which is the sum of numbers written in a string delimited by comma given in input", function() {
      expect(exercise.run(['64,23,56,7'])).to.be.eql(150);
    });
  });
});
