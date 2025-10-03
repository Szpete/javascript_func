console.log("kristaly vedd meg az enshrouded-et")

/**
 * @type {string}
 */
const valtozo= "kaki"

console.log(valtozo)


/**
 * @type {string[]}
 */
const tomb=["krisa", "vedd", "meg", "az", "enshrouded-et"]
console.log(tomb[0])
                                              

for(let i = 0; i < tomb.length; i++){
    console.log(tomb[i])
}

for(const a of tomb){
    console.log(a)
}   

for(const key in tomb){
    console.log(`${key}:${tomb[key]}`)
}


/**
 * @type {{nev:string, age:number}}
 */
const a={
    nev: "pete-chan",
    age: 18
}

console.log(a)
