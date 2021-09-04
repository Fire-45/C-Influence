var username = "";

    function nextPage(){
        username = document.getElementById("Input_username").value;
        localStorage.setItem("USERNAME", username);
        window.location = "Messenger_room.html";
    
    }

    function back(){
        window.location = "Prototype.html"
    }