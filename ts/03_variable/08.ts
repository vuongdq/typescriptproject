let obj1: any={}
console.log(obj1);

interface CourseInerface{
    name:string;
    time:number;
    fee?:boolean;

}

let obj2:CourseInerface;
obj2={
    name:"ES6",
    time:20
}
console.log(obj2);

let obj3:CourseInerface= {
    name: "Java",
    time:20,
    fee:false
}
console.log(obj3);