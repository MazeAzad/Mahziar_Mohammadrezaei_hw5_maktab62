let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami" 
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani" 
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi" 
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri" 
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand" 
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan" 
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"  
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan" 
    }
]
let result=[];
for(let obj1 of personData){
    for(let obj2 of additionalPersonData){
        if(obj1.uid===obj2.uid){
            let resultObj={...obj1};
            resultObj.position=obj2.position;
            resultObj.city=obj2.city;
            result.push(resultObj);
        }
    }
}
console.log(result);