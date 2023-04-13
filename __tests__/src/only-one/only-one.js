/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Only one
 * ------------------
 *
 * Goal: Make sure that both `eatBanana` and `eatMouse` can be called inside `eatSomething`.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
 */
var Monkey = /** @class */ (function () {
    function Monkey() {
    }
    Monkey.prototype.eatBanana = function () {
        return "Eating banana!";
    };
    return Monkey;
}());
var Snake = /** @class */ (function () {
    function Snake() {
    }
    Snake.prototype.eatMouse = function () {
        return "Eating mouse!";
    };
    return Snake;
}());
var monkey = new Monkey();
var snake = new Snake();
function eatSomething(animal) {
    if ("eatBanana" in animal) {
        return animal.eatBanana();
    }
    else if ("eatMouse" in animal) {
        return animal.eatMouse();
    }
}
/* Do not modify tests */
test("should eat banana", function () {
    expect(eatSomething(monkey)).toBe("Eating banana!");
});
test("should eat mouse", function () {
    expect(eatSomething(snake)).toBe("Eating mouse!");
});
