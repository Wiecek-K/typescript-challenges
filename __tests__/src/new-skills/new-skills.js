/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* New skills
* ------------------
*
* Goal: Make sure that `johnDoe` can build his impressive resume. Do not use classes.
*
* Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
*/
var johnDoe = {};
function buildResume(person) {
    var skills = [
        person.dance(),
        person.sing(),
        person.teach()
    ];
    return skills;
}
/* Do not modify tests */
test('should build an impressive resume', function () {
    var resume = buildResume(johnDoe);
    expect(resume).toStrictEqual([
        'I can dance!',
        'I can sing!',
        'I can teach!'
    ]);
});
