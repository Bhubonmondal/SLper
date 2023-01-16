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


function noteMakerLogo(){
       document.getElementById('noteMakerLogo').style.display="none";   
       document.getElementById('noteMakerContent').style.display="flex";
       document.getElementById('noteMakerContent').style.flexDirection="column";
       document.getElementById('noteMaker').style.width="700px";
       document.getElementById('noteMaker').style.height="400px";
}
function closeMarkNoteMaker(){
       document.getElementById('noteMakerLogo').style.display="flex";   
       document.getElementById('noteMakerContent').style.display="none";
       document.getElementById('noteMaker').style.width="200px";
       document.getElementById('noteMaker').style.height="200px";
       
}

function fakeWordLogo(){
       document.getElementById('fakeWordLogo').style.display="none";
       document.getElementById('fakeWordContent').style.display="flex"; 
       document.getElementById('fakeWordContent').style.flexDirection="column";
}
function closeMarkFakeWord(){
       document.getElementById('fakeWordContent').style.display="none"; 
       document.getElementById('fakeWordLogo').style.display="flex";
       document.getElementById('fakeWordLogo').style.flexDirection="column";
       document.getElementById('fakeWordLogo').style.textAlign="center";
}

var qrcode = new QRCode("contactNo", {
       text: "9875156525",
       width: 50,
       height: 50,
       colorDark : "#000000",
       colorLight : "#ffffff",
       correctLevel : QRCode.CorrectLevel.H
   });


   
   //////////////////////
   
   const contact = {
       name: "John Doe",
       phone: "555-555-5555",
       email: "johndoe@example.com",
       address: "1234 Example St., Example City, Example State 12345, USA"
   };
   
   const vCard = `BEGIN:VCARD
   VERSION:3.0
   N:${contact.name}
   TEL;TYPE=CELL:${contact.phone}
   EMAIL:${contact.email}
   ADR;TYPE=HOME:;;${contact.address}
   END:VCARD`;
   
   var qrcode = new QRCode("ContactInfo", {
       text: vCard,
       width: 100,
       height: 100,
       colorDark : "#000000",
       colorLight : "#ffffff",
       correctLevel : QRCode.CorrectLevel.H
   });
   

   /////////////////////
function showqrcode(x){
       x.style.display="flex";
}

function hideqrcode(x){
       x.style.display="none";
}

////Fake Word/////
function fileList(){
       document.getElementById('fileText').style.fontWeight="500";
       document.getElementById('fileText').style.borderBottom="2px solid #2b579a";
       document.getElementById('fileList').style.borderBottom="3px solid #2b579a";
       document.getElementById('homeText').style.fontWeight="400";
       document.getElementById('homeText').style.borderBottom="0px";
       document.getElementById('homeList').style.borderBottom="0px";
       document.getElementById('insertText').style.fontWeight="400";
       document.getElementById('insertText').style.borderBottom="0px";
       document.getElementById('insertList').style.borderBottom="0px";
       document.getElementById('layoutText').style.fontWeight="400";
       document.getElementById('layoutText').style.borderBottom="0px";
       document.getElementById('layoutList').style.borderBottom="0px";
}
function fileListHover(){
       document.getElementById('fileText').style.borderBottom="3px solid #2b579a";
       document.getElementById('fileList').style.borderBottom="0px";
}

function homeList(){
       document.getElementById('homeText').style.fontWeight="500";
       document.getElementById('homeText').style.borderBottom="2px solid #2b579a";
       document.getElementById('homeList').style.borderBottom="3px solid #2b579a";
       document.getElementById('fileText').style.fontWeight="400";
       document.getElementById('fileText').style.borderBottom="0px";
       document.getElementById('fileList').style.borderBottom="0px";
       document.getElementById('insertText').style.fontWeight="400";
       document.getElementById('insertText').style.borderBottom="0px";
       document.getElementById('insertList').style.borderBottom="0px";
       document.getElementById('layoutText').style.fontWeight="400";
       document.getElementById('layoutText').style.borderBottom="0px";
       document.getElementById('layoutList').style.borderBottom="0px";
}
function homeListHover(){
       document.getElementById('homeText').style.borderBottom="3px solid #2b579a";
       document.getElementById('homeList').style.borderBottom="0px";
}

function insertList(){
       document.getElementById('insertText').style.fontWeight="500";
       document.getElementById('insertText').style.borderBottom="2px solid #2b579a";
       document.getElementById('insertList').style.borderBottom="3px solid #2b579a";
       document.getElementById('homeText').style.fontWeight="400";
       document.getElementById('homeText').style.borderBottom="0px";
       document.getElementById('homeList').style.borderBottom="0px";
       document.getElementById('fileText').style.fontWeight="400";
       document.getElementById('fileText').style.borderBottom="0px";
       document.getElementById('fileList').style.borderBottom="0px";
       document.getElementById('layoutText').style.fontWeight="400";
       document.getElementById('layoutText').style.borderBottom="0px";
       document.getElementById('layoutList').style.borderBottom="0px";
}
function insertListHover(){
       document.getElementById('insertText').style.borderBottom="3px solid #2b579a";
       document.getElementById('insertList').style.borderBottom="0px";
}

function layoutList(){
       document.getElementById('layoutText').style.fontWeight="500";
       document.getElementById('layoutText').style.borderBottom="2px solid #2b579a";
       document.getElementById('layoutList').style.borderBottom="3px solid #2b579a";
       document.getElementById('homeText').style.fontWeight="400";
       document.getElementById('homeText').style.borderBottom="0px";
       document.getElementById('homeList').style.borderBottom="0px";
       document.getElementById('insertText').style.fontWeight="400";
       document.getElementById('insertText').style.borderBottom="0px";
       document.getElementById('insertList').style.borderBottom="0px";
       document.getElementById('fileText').style.fontWeight="400";
       document.getElementById('fileText').style.borderBottom="0px";
       document.getElementById('fileList').style.borderBottom="0px";
}
function layoutListHover(){
       document.getElementById('layoutText').style.borderBottom="3px solid #2b579a";
       document.getElementById('layoutList').style.borderBottom="0px";
}

var textarea = document.getElementById("fakeWordTextArea");


    if (textarea.scrollHeight > textarea.offsetHeight) {


        document.getElementById("YourDivId").appendChild(document.createElement("textarea"));


    }


function newTextAreaMakerButton(){
       let div = document.getElementById("wordTextAreaDiv");
       let newTextArea = document.createElement("textarea");

       if (textarea.scrollHeight > textarea.offsetHeight) {
              div.appendChild(newTextArea);
              newTextArea.style.width="400px";
              newTextArea.style.height="50px";
              newTextArea.style.resize="none";
              newTextArea.style.outline="none";
       }

       var height = fakeWordTextArea.offsetHeight;
       fakeWordTextArea.value = "Hello world";

       console.log(height);
}


