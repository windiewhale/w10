
//objektumból ki tujuk hámozni bizonyos értékpárokat, létrehozni ugyanilyen nevű változót. hátrány: nem lehetséges új nevet adni a változóknak, csak a kulcs név marad const name = userProfile.name; const age = userProfile.age ezeknek a rövidítése

const userProfile = {
    name: "Leto Atreides",
    age: 3400,
    country: "Dune"
};

/* const {name, age} = userProfile;

console.log("name: ", name);
console.log("age: ", age); */


/* const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
};
 logNameAndAge(userProfile) */
/* 
 const logNameAndAge = ({name, age}) => { 
    console.log("name: ", name);
    console.log("age: ", age);
};
 logNameAndAge(userProfile)         //beküldtjük az egész objektumot, de már funkció paramétereként fel tudjuk bontani az objektumot s kiszedni belőle */


 const arr = [5, 6 ,2 ,3];

 /* const first = arr[0];
 const second = arr[1];

 console.log("first: ", first);
 console.log("second: ", second); */

 const [uno, dos] = arr;

 console.log("uno: ", uno);
 console.log("dos: ", dos);         //objektumnál fontos volt h lézező kulcsot adjunk meg válntoozó névnek, tömbnél nem a változó neve számít, itt az a fontos h a sorrend stimmeljen.

 const [x, ...y] = arr;

 console.log("x: ", x);
 console.log("y: ", y);

