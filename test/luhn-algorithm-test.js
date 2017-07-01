var assert = require("chai").assert;
var check = require("../luhn-algorithm.js");

describe("Luhn Algorithm", function() {
  it("should return true if a given number is valid", function() {
    var number = 79927398713;
    var result = check(number);
    assert.isTrue(result);
  });

  it("should return false if a given number is NOT valid", function() {
    var number = 79927398712;
    assert.isFalse(check(number));
  });

  it("should return a message if a given number DOES NOT have 11 numbers", function() {
    var number = 7999999999;
    var message = "given number does not have 11 numbers."
    assert.equal(check(number), message);
  })
});

