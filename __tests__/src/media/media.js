/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Media
* ------------------
*
* Goal: At Przeprogramowani.pl we use multiple platforms at once - make sure that our favorite one works!
*
* Hint: https://www.typescriptlang.org/docs/handbook/enums.html
*/
var Media;
(function (Media) {
    Media[Media["Internet"] = 0] = "Internet";
    Media[Media["Press"] = 1] = "Press";
    Media[Media["Radio"] = 2] = "Radio";
})(Media || (Media = {}));
var przeprogramowani = Media.Press;
/* Do not modify tests */
test('should use proper media type', function () {
    expect(przeprogramowani).toBe('Internet');
});
