// ?? JavaScript's Null Coalescing Operator
/* 
If you don't want to use falsy values, then use ||. If you only want want to check if something is null or undefined, use ??.
*/
let person;
person = person ?? {name:'sasa'};
console.log(person);

const isActive = false
console.log(isActive ?? true)

// Chaining JavaScript's Null Coalescing Operator
console.log(null ?? undefined ?? false ?? 'test');
console.table(
    [
        null ?? undefined ?? false ?? 'hello',     // false
        null ?? 'x' ?? 'hello'                     // ''
    ]
)

/* 
Null coalescing operator skips null, undefined
Logical or operator skips null, undefined, false
*/

// null coalescing skips null and undefined
console.log(false ?? 'hello');

//logical or skips null undefined,falsy value
console.log(false || 'hello');

/* FInd the first value that isn't null or undefined */
console.table(
    [
        null ?? 'hi',
        undefined ?? 'hello',
        false ?? 'hola',
        0 ?? 'bonjour',
        null ?? 'first' ?? 'second',
        null ?? undefined ?? 'third'
    ],
)

