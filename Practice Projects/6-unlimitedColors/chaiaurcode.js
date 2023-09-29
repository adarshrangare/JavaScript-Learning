// GENRATE RANDOM COLOR

const randomColor = ()=>{
  const hex = "0123456789ABCDEF";
  let color = "#";

  for(let i=0;i<6;i++){

    let s = Math.round(Math.random()*16);

    color+= hex.charAt(s);

  
  }
  return color;
}

console.log(randomColor());

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

console.log(start);
let interval;
start.addEventListener("click",(e)=>{
 interval = setInterval(()=>{
    document.querySelector("body").style.backgroundColor = randomColor();
    console.log("background color Changed");
  },50); 
  
});

stop.addEventListener("click",(e)=>{
    clearInterval(interval);
    console.log("stopped");
    interval = null;
})
