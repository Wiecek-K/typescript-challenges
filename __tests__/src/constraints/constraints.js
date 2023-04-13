/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Constraints
* ------------------
*
* Goal: Implementation of generic function `processItems` is broken. Generic type `T` is not enough so let's fix it!
*
* Hint: https://www.typescriptlang.org/docs/handbook/generics.html
*/
var books = [
    { id: 1, name: 'Our Friends from Frolix 8', author: 'Philip K. Dick' },
    { id: 2, name: 'When: The Scientific Secrets of Perfect Timing', author: 'Daniel H. Pink' },
    { id: 3, name: 'Total Recall: My Unbelievably True Life Story', author: 'Arnold Schwarzenegger' },
    { id: 4, name: 'Wyloguj swój mózg', author: 'Anders Hansen' }
];
var videos = [
    { id: 1, name: 'Ciekawostki o typach', length: 17 },
    { id: 2, name: 'Refaktoryzacja JS do TS', length: 15 },
    { id: 3, name: 'TypeScript na Backendzie', length: 13 },
    { id: 4, name: 'TypeScript i Frameworki Front-Endowe', length: 19 },
    { id: 5, name: 'Poznaj TypeScript', length: 22 }
];
function processItems(items) {
    return items
        .filter(function (_a) {
        var id = _a.id;
        return id > 2;
    })
        .map(function (_a) {
        var id = _a.id, name = _a.name;
        return ({ id: id, name: name });
    });
}
var processedBooks = processItems(books);
var processedVideos = processItems(videos);
/* Do not modify tests */
test('should return only some specific books', function () {
    expect(processedBooks.length).toBe(2);
});
test('should return only some specific videos', function () {
    expect(processedVideos.length).toBe(3);
});
