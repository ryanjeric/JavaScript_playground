// https://scotch.io/tutorials/optionalchaining-in-javascript-2020-ecmascript-2020
// https://github.com/tc39/proposal-optional-chaining

/* 
> OPTIONAL CHAINING 
Access values without checking if the parent object exists. 
Instead of returning an error, it will return null or undefined.

JavaScript's optional chaining are available with objects, arrays, and functions.
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
*/
const animals = {
    dog: {name: 'bella'},
    cat: {name: 'hillo'}
}

//const name = animals.duck.name // -> Throws Error: Cannot read property 'name' of undefined
/* to avoid the error what, I and others usually do...
let duckname;
if(animals.duck) // check if duck exist
    duckname = animals.duck.name
*/
const duckname = animals.duck?.name // optional chaining by only using the ? character
console.log(duckname)

const animals2 = {
    dogs: [{name: 'bella'}, {name: 'fido'}],
    pet: (name) => {
        console.log(`${name} has been pet`)
    }
}

const name0 = animals2.dogs?.[0]?.name;
const namex = animals2.dogs?.[0]?.namex;
console.log(name0)
console.log(namex)

const pet0 = animals2.pet?.(name0)
console.log(animals2.dogs?.[55555555]?.xxxxxxxxxx)

const n = (null)?.b
console.log(n)

const func = (xx) => {
    console.log(xx)
}
func?.(['123','456'])