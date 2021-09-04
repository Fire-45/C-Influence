var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function START(){
    document.getElementById("textBox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = content;
    if(content == "take picture"){
    speak();
    Webcam.attach( '#camera' );
    setTimeout(function (){
        takeSnapShot();
        save();

    },5000);

    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your picture in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 
 function takeSnapShot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = "<img id = 'RESULT' src = '"+data_uri+"'>"
     });
 }

 function save(){
     link = document.getElementById("link");
     img_taken = document.getElementById("RESULT").src;
     link.href = img_taken;
     link.click();
 }

 function back(){
     window.location = "Prototype.html";
 }

function Info(){
    window.alert("This website is used so you can copy and paste using your voice in case you are a bad typer, but also if you want to take a picture all you have to say is take picture, also copy and paste on macbooks are command C and paste is command V")
}