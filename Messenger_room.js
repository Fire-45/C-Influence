//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlHFo_plV2CcIqcZ1W3W1Agzg--AKOx8I",
    authDomain: "c-messenger-68b78.firebaseapp.com",
    databaseURL: "https://c-messenger-68b78-default-rtdb.firebaseio.com",
    projectId: "c-messenger-68b78",
    storageBucket: "c-messenger-68b78.appspot.com",
    messagingSenderId: "197883665048",
    appId: "1:197883665048:web:43681a5714a49b68524eed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var G_username = localStorage.getItem("USERNAME");
document.getElementById("display_greetings").innerHTML = "Hello,"+G_username;


function logout(){
window.location = "index.html";
document.getElementById("Input_username").innerHTML = "";

}

function createRoom(){
var room = document.getElementById("add_room").value;
localStorage.setItem("room", room);
firebase.database().ref("/").child(room).update({
    purpose:"addRoomName"
})
window.location = "Messenger_page.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    document.getElementById("output").innerHTML += "<div class = 'room_name' id = '"+Room_names+"' onclick = 'redirect(this.id)'>"+Room_names+"</div><hr>"


    //End code
    });});}
    function redirect(name){
          localStorage.setItem("room" ,name);
          window.location = "kwitter_page.html";
          
    }
getData();


