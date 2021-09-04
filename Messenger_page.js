//YOUR FIREBASE LINKS
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
  function logout(){
    window.location = "Messenger.html";
    document.getElementById("Input_username").innerHTML = "";

}

var username = localStorage.getItem("USERNAME");
var room_name = localStorage.getItem("room");

function SEND(){
    var mEsSaGeS = document.getElementById("messages").value;
    firebase.database().ref(room_name).push({
    name:username,
    Message: mEsSaGeS,
    like:0
     })
     
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);
       name_data = message_data["name"];
       message =  message_data["Message"];
       like = message_data["like"];
       nameWithTag = "<h4>"+name_data+"<img src = 'tick.png' class = 'user_tick'></h4>";
       messageWithTag = "<h4 class = 'message_h4'>"+message+"</h4>";
       likeWithTag = "<button class='btn btn-warning' id = '"+firebase_message_id+"'value = '"+like+"' onclick = 'update_like(this.id)'>Like: "+like+"</button>"
       document.getElementById("output").innerHTML += nameWithTag+messageWithTag+likeWithTag;
//Start code


//End code
    } });  }); }
getData();
function update_like(message_id){
button_id = message_id;
likes = document.getElementById(message_id).value;
likes = Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
    like: likes
})
}
