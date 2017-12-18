const expect = require("chai").expect;

const exercise = require("../src/exercise4");

describe("Exercise #4", function() {
  describe("function run()", function() {
    it("should an object which combine 2 objects given in input", function() {
      expect(exercise.run(
        { name: 'Dupont', money: 200 },
        { firstname: 'Marc', money: 40 }
      )).to.be.eql({ name: 'Marc', name: 'Dupont', money: 240 });
    });
  });
});

describe("Exercise #4", function() {
  describe("function run()", function() {
    it('should return the number 34 with inputs already given', function() {
      expect(
        exercise.run(function(a, b, c) {
          return a(b, c);
        })
      ).to.be.eql(34);
    });
  });
});
