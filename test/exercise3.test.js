const expect = require("chai").expect;

const exercise = require("../src/exercise3");

describe("Exercise #3", function() {
  describe("function run()", function() {
    it("should an object which combine 2 objects given in input", function() {
      expect(exercise.run(
        { name: 'Dupont', money: 200 },
        { firstname: 'Marc', money: 40 }
      )).to.be.eql({ name: 'Marc', name: 'Dupont', money: 240 });
    });
  });
});
