let i = 6

function valami(){
    console.log("fing")
}
valami()


function valami2(){
    console.log(i)
}
valami2()

/**
 * @return {void}
 */

function valami3(){
    const b =7
    console.log(b)
}
valami3()


/**
 * @param {number} param1 
 * @returns {number}
 */
function valami4(param1){
    const num = 6
    const sum =num +param1
   
    return sum
}
const x = valami4(2)
console.log(x)

