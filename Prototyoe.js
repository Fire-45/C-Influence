
function VT(){
    window.location = "index copy.html";
}
function CH(){
    window.location = "DRAW.html"
}
function BO(){
    window.location = "Messenger.html"
}

function G(){
    window.location = "C-Game.html";
}

var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function START(){
    document.getElementById("VoiceR").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("VoiceR").innerHTML = content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("VoiceR").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function Copy(){
    alert("For macbooks press shift command C for copy and shift command V for paste")
}

function back(){
    window.location = "Prototype.html";
}