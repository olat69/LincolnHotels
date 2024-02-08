var now = new Date();
var datetime = now.toLocaleString();

document.getElementById("datetime").innerHTML=datetime;

var now = new TimeRanges();
var time = now.toLocaleString;

document.getElementById("time").innerHTML= time;


function myfunction() {
    let text = "Your room has been booked successfully!\nInformation on your room will be sent to your email.";
if (confirm(text) == true) {
    text= "You pressed ok";
} else {
    text = "You cancelled";
}
}

document.getElementById("demo").innerHTML = text;