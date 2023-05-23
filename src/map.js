const arr=[1,2,5,7,6]

//filter odd values

// function isOdd(x)
// {
//     return x % 2===0
// }

// const output=arr.filter(isOdd)

// const output1=arr.filter((x)=>x<3)
// console.log(output);
// console.log(output1);

// reduce


const output=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max
},0)
console.log(output)