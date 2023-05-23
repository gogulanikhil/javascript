// const radius=[1,5,2,7]
//  const area=function (radius){
//     return Math.PI * radius * radius
//  }
//  const calculate =function(radius,logic){
//     const output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output
//  }
// console.log(calculate(radius,area));
const radius=[1,2,3,4]

const area =function (radius){
    return Math.PI *radius*radius
}
const calculate=function(radius,logic){
    const output=[]
    for(let i=0;i<radius.length;i++){

        output.push(logic(radius[i]))

    }
    return output
}
console.log(calculate(radius,area));
console.log(radius.map(area));