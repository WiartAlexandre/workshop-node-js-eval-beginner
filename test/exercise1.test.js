const expect = require("chai").expect;

const exercise = require("../src/exercise1");

describe("Exercise #1", function() {
  describe("function run()", function() {
    it("should return the the 3 first values of an array given in input", function() {
      expect(exercise.run([
        'Hello you',
        9,
        '44',
        666,
        'bye'
      ])).to.be.eql([
        'Hello you',
        9,
        '44'
      ]);
    });
  });
});
