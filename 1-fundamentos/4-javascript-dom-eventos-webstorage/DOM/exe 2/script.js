let fundoHeader = document.getElementById('header-container');
fundoHeader.style = 'background-color: green';
let fundoEmergency= document.getElementsByClassName('emergency-tasks')[0];
fundoEmergency.style = 'background-color: hotpink';
let fundoNoEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
fundoNoEmergency.style = 'background-color: khaki';
let fundoTextoEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < fundoTextoEmergency.length; i += 1) {
  fundoTextoEmergency[i].style = 'background-color: blueviolet';
}

let fundoTextoNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < fundoTextoNoEmergency.length; i += 1) {
  fundoTextoNoEmergency[i].style = 'background-color: black';
}

let footer = document.getElementById('footer-container');
footer.style = 'background-color: darkgreen';