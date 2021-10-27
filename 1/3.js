let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi",
        position: "Back-End Develope",
        city: "Taleqan" 
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan",
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami",
        position: "UI Designer",
        city: "Biarjmand" 

    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani",
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi",
        position: "Product Manager",
        city: "Hamedan" 
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri",
        position: "Server Admin",
        city: "Tehran"  
    }
]
function create(uid,firstName,lastName,position,city)
{
    let check=personData.find(a=>{
        return (a.uid===uid)&&(a.firstName===firstName)&&(a.lastName===lastName)&&(a.position===position)&&(a.city===city);

    });
    if(check!=null){
        function Create(uid,firstName,lastName,position,city)
        {
            this.uid=uid;
            this.firstName=firstName;
            this.lastName=lastName;
            this.position=position;
            this.city=city;
    
        }
        personData.push(new Create(uid,firstName,lastName,position,city));
        return personData;
    }else{
        console.log("this element already exist");
    }


}


function update(object)
{
    let updateItem=personData.find(a=>{
        return a.uid===object.uid;
    })
    if(updateItem!=null){
        updateItem=object;
    }else{
        console.log("the element does not exist");
    }
   

}
function read(){
    console.log(personData);
}

function deleteArray(uid){
    let index=0;
    for(let i=0;i<personData.length;++i){
        if(personData[i].uid===uid){
            index=i;
        }
    }
    personData.splice(index,1);
    console.log("successfully deleted");
    
}

deleteArray(6);
