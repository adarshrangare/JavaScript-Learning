  console.log("hello");
      const timeDiv = document.querySelector("#time");
      const startButton = document.querySelector("#start");
      const pauseButton = document.querySelector("#pause");
      const stopButton = document.querySelector("#stop");


      pauseButton.disabled = true;
      stopButton.disabled = true;



      let time = {	
        seconds: 00,
        minutes:0,
        hours:0
      } 




      setTime();
      function setTime(){
      correctTime();
            
            timeDiv.innerHTML = `${(time.hours).toString().padStart(2,"0")}:${(time.minutes).toString().padStart(2,"0")}:${(time.seconds).toString().padStart(2,"0")}`;
            
          

      }


      function correctTime(){
          
          if(time.seconds >= 60){
                
                time.minutes += Math.floor(time.seconds/60);
                
                time.seconds = time.seconds%60;
              
          
          } 
          
              if(time.minutes >= 60){
                
                time.hours += Math.floor(time.minutes/60);
                
                time.minutes = time.minutes%60;  
          
          } 

      }

      
      var setIntervalId;

      function start(){
          console.log("Started");
          pauseButton.disabled = false;
          stopButton.disabled = false;
          startButton.disabled = true;
          

          setIntervalId = setInterval(()=>{
              
              time.seconds++;
              setTime();
            
          },1000);
          
          
      }
      function pause(){
          console.log("Paused");
          clearInterval(setIntervalId);
          pauseButton.disabled = true;
          stopButton.disabled = false;
          startButton.disabled = false;
      }
      function stop(){
          console.log("Stopped");
          clearInterval(setIntervalId);
          time.hours = 0;
          time.minutes =0;
          time.seconds =0;
          
          setTime();
          pauseButton.disabled = true;
          stopButton.disabled = true;
          startButton.disabled = false;
      }
