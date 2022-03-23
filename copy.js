//--- spread operator ---

const arr1 = [5, 4, 8];
const arr2 = [6, 2, 7];

const arr3 = [...arr1] // ha tömböt másol, abba kell tenni a ... sztorit
arr3.push(9)
console.log("arr1: ", arr1);
console.log("arr3: ", arr3);

const arr4 = [...arr1, ...arr2]

console.log("arr4: ", arr4);

const userProfile = {
    name: "Leto Atreides",
    age: 3400,
    country: "Dune"
}

const userProfile2 = {...userProfile, gender: "hybrid", name: "Chani"} //megváltoztatta másolás közben a létező kulcs értékét

console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);