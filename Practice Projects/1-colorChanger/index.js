console.log("Hello World");

// Without Event Listener

changeColor = (color)=>{
  console.log(`${color} is clicked`);
  document.querySelector("body").style.backgroundColor = color;
}

// With Event Listener

const buttons = document.querySelectorAll(".button");
console.log(buttons);

  buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
      console.log(`${e.target.id} is clicked`);
      console.log(e);
      console.log(e.target);
      document.querySelector("body").style.backgroundColor = e.target.id;

    })
  })

