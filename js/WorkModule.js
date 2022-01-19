let Users=[
    {name:'ahmed',age:"30",gender:'male' },
    {name:'mohamed',age:"5",gender:'male' },
    {name:'amira',age:"12",gender:'female' },
    {name:'asmaa',age:"30",gender:'female' }
]
let Ages=[20,10,14,12,15,30];
export let newUsers=Users.filter(user=>user.age>16).map((user)=>{
   if(user.gender=="female") {
       user.name="MS "+ user.name;
       return user;
   }
   else{
    user.name="MR "+ user.name;
    return user;
   }
})
 export let anotherUser=Ages.reduce((sum,age)=>{ return sum+=age},0);