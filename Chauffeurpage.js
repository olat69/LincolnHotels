function compact() {
  var feedback = "Great! You selected the Compact car. Charge:#20,000.";
  document.getElementById("selection").innerHTML = feedback;
}

function sedan() {
  var feedback = "Great! You selected the Sedan car. Charge:#30,000.";
  document.getElementById("selection").innerHTML = feedback;
}

function suv() {
  var feedback = "Great! You selected the SUV car. Charge:#50,000.";
  document.getElementById("selection").innerHTML = feedback;
}

function chauff() {
  let text =
    "Your ride has been booked successfully!\nInformation on your ride will be sent to your email.";
  if (confirm(text) == true) {
    text = "You pressed ok";
  } else {
    text = "You cancelled";
  }
}
