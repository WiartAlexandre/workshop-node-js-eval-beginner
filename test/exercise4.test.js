const expect = require("chai").expect;

const exercise = require("../src/exercise4");

describe("Exercise #4", function() {
  describe("function run()", function() {
    it('should return the number 30 with inputs already given', function() {
      expect(
        exercise.run(function(a, b, c) {
          return a(b, c);
        })
      ).to.be.eql(30);
    });
  });
});
