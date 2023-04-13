/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Shortcuts
 * ------------------
 *
 * Goal: Make sure that everything works fine - it's that simple!
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/classes.html
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bag = /** @class */ (function () {
    function Bag(items) {
        this.items = items;
    }
    Bag.prototype.lookInside = function () {
        return this.items;
    };
    return Bag;
}());
var BrandedBag = /** @class */ (function (_super) {
    __extends(BrandedBag, _super);
    function BrandedBag(logo, brand, items) {
        return _super.call(this, items) || this;
    }
    BrandedBag.prototype.checkBrand = function () {
        return "Brand - ".concat(this.brand);
    };
    return BrandedBag;
}(Bag));
var devBag = new BrandedBag("<P/>", "Przeprogramowani.pl", [
    "keys",
    "sunglassess",
    "books",
]);
/* Do not modify tests */
test("should contain proper brand", function () {
    expect(devBag.checkBrand()).toBe("Brand - Przeprogramowani.pl");
});
test("should contain keys", function () {
    expect(devBag.lookInside().includes("keys")).toBeTruthy();
});
test("should contain a logo", function () {
    expect(devBag.logo).toBe("<P/>");
});
