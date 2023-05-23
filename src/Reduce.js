const user=[
    {
        firstName:"nikhil",lastName:"Gogula",age:25
    },
    {
        firstName:"akhil" ,lastName:"gogula",age:26
    }
]
const output3=user.map((user)=> user.firstName + " " + user.lastName)

// console.log(output3);

const logic=user.reduce(function(acc,curr){
    if(acc[curr.age]){  // acc[curr.age] = null, 1
        acc[curr.age]=++acc[curr.age]       // ++1
    }
    else{
        acc[curr.age]=1     // modified to 1
    }
    return acc;         //1, 2
},{})
console.log(logic)