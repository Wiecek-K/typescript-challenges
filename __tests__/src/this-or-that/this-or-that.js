/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * This or that
 * ------------------
 *
 * Goal: Make sure that `configureScreenSize` function can accept both types of parameters.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
 */
var iAmANumber = 800;
var iAmAString = "600";
function configureScreenSize(width, height) {
    return "Setting screen size as ".concat(width, "px x ").concat(height, "px");
}
/* Do not modify tests */
test("should pass with two numbers", function () {
    expect(configureScreenSize(iAmANumber, iAmANumber)).toBe("Setting screen size as 800px x 800px");
});
test("should pass with number and string", function () {
    expect(configureScreenSize(iAmANumber, iAmAString)).toBe("Setting screen size as 800px x 600px");
});
test("should pass with string and number", function () {
    expect(configureScreenSize(iAmAString, iAmANumber)).toBe("Setting screen size as 600px x 800px");
});
test("should pass with two strings", function () {
    expect(configureScreenSize(iAmAString, iAmAString)).toBe("Setting screen size as 600px x 600px");
});
