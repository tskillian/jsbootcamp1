// This is a simple assert function. Typically you would bring
// should.js into the project.
function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

// Tell mocha that we want to use bdd style DSL and that jQuery
// is global.
mocha.setup("bdd");
mocha.checkLeaks();
mocha.globals(['jQuery']);

// This is our function we want to test
var isPrime = function(i) {
    if(i === null)
        return false;
};

// This is our BDD test rule.
describe("isPrime()", function() {
    it("should return false when i is null", function() {
        ok(isPrime(null) === false,
           "isPrime did not return a boolean false");
    });
});

// Now run the tests.
mocha.run();