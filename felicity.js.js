function addUser(){
user_name = document.getElementById("chilly_input").value;

localStorage.setItem("user_name", user_name);

window.location = "felicity_room.html";

}