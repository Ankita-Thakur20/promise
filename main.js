let numbers=[1,2,3,4,5,6,7,8,9]
const numprint=()=>{
    setTimeout(()=>{
      numbers.forEach((print)=>console.log(print));
    },1000)
    
};

const message=()=>{
  setTimeout(()=>{
    console.log("workdone")  
  },2000)
 
}
// message();

// const addnumber=(num,callback,callback2)=>{
//   setTimeout(()=>{
//     numbers.push(num);
//     callback();
//     callback2();
//   },1500)

// };
// addnumber(70,numprint,message);
// numprint();

const addnumber=(num)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
      numbers.push(num);
      let err=false
      if(!err){
        resolve()

      }else {
        reject("something went wrong!!")
      }
     
    },1500);
  })
};

// const printError=()=>{
//   console.log("something went wrong")
// }

// addnumber(30)
// .then(numprint)
// .then(message)
// .catch(()=>{
//   console.log("something went wrong")
// });

const init= async()=>{
  try{
    await addnumber(20);
    numprint();
    message();

  }catch(error){
    console.log("error")
  }
  };

init();