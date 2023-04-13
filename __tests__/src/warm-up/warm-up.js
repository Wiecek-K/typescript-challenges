/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Warm Up!
 * ------------------
 *
 * Goal: First challenge - fix the types of variables and make sure that tests work fine!
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/basic-types.html
 */
var age = 80;
var firstName = "Przemek";
var todos = [
    { todo: "Learn TypeScript" },
    { todo: "Subscribe Przeprogramowani", priority: 1 },
    { todo: "Sign up for newsletter", priority: 1 },
];
/* Do not modify tests */
test("should verify age", function () {
    expect(age).toBe(80);
});
test("should verify firstName", function () {
    expect(firstName).toBe("Przemek");
});
test("should verify todos", function () {
    expect(todos.length).toBe(3);
});
