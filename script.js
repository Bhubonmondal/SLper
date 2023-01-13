 // Function to update the time
 function updateTime() {
       var currentTime = new Date();
       var hours = currentTime.getHours();
       var minutes = currentTime.getMinutes();
       var seconds = currentTime.getSeconds();

       //alarm at a specific time
       if(hours===15 && minutes===19 &&  seconds===30){
              var alertSound = new Audio("alert.wav");
              alertSound.play();
       }

       if (minutes < 10) {
       minutes = "0" + minutes;
       }
       if (seconds < 10) {
       seconds = "0" + seconds;
       }

       var time = "";
       if (hours > 12) {
       hours -= 12;
       time += hours + ":" + minutes + ":" + seconds + " PM";
       } else if (hours == 0) {
       hours = 12;
       time += hours + ":" + minutes + ":" + seconds + " AM";
       } else if (hours == 12) {
       time += hours + ":" + minutes + ":" + seconds + " PM";
       } else {
       time += hours + ":" + minutes + ":" + seconds + " AM";
       }
       document.getElementById("clock").innerHTML = time;
}
updateTime();
setInterval(updateTime, 1000);

document.getElementById("calculatorLogo").addEventListener("click", calculator);

function calculator(){
       document.getElementById('hiddenCalculator').style.display="flex";
       document.getElementById('calculator').style.display="none";
}

function closeMarkIcon(){
       document.getElementById('hiddenCalculator').style.display="none";   
       document.getElementById('calculator').style.display="flex";
       document.getElementById('calculator').style.flexDirection="column";
       document.getElementById('calculator').style.textAlign="center";
}


function noteMaker(){
       document.getElementById('noteMaker').style.width="700px";
       document.getElementById('noteMaker').style.height="400px";
       document.getElementById('textAreaNoteMaker').style.display="flex";  
}
function closeMarkNoteMaker(){
       document.getElementById('textAreaNoteMaker').style.display="none"; 
       document.getElementById('noteMaker').style.width="200px";
       document.getElementById('noteMaker').style.height="200px";
        
}

