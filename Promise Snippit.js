
const promise = new Promise((res) => {
  setTimeout(() => {
    res("resolve");
  }, 1000);
});

/* promise.then((res)=>(console.log(res))) */
/* console.log(promise); */


/* when Promise is assigned to varriable, the method runs and return empty Promise Object with  */

const promise2 = new Promise((res)=>{
		/* synchromnous */
    /* console.log(100); */
    
    /* Async Part */
		res("res");
	
})
/* 
promise2.then((res)=>console.log(res));

console.log("first") */


const secondPromise = new Promise((res)=>{
	
  res('second');

}

)

/* console.log(secondPromise); */

const firstPromise = new Promise((res)=>{
		res(secondPromise);
}) 


/* secondPromise.then(value =>console.log(value)); */

firstPromise.then(value => console.log(value)) 


/* .then(innerPromise => innerPromise)
.then(value => console.log(value)); */





