var timer = function () {
var clock = new Date;

var justHours = clock.getHours();
var justMinutes = clock.getMinutes();
var justSeconds = clock.getSeconds();

if (justHours > 12){
  justHours = justHours - 12;
}
if(justHours < 10){
  justHours = "0" + justHours;
}
if(justMinutes < 10){
  justMinutes = "0" + justMinutes;
}
if(justSeconds < 10){
  justSeconds = "0" + justSeconds;
}

var time = document.querySelector('.clock');
var time2 = document.querySelector('.clock2');
var color = ("#" + justHours + justMinutes + justSeconds);
time.innerHTML = (justHours + ":" + justMinutes + ":" + justSeconds)
time2.innerHTML = ("#" + justHours + justMinutes + justSeconds)
var boxColor = document.querySelector('#colorchanger');
boxColor.style.backgroundColor = color;

};
var intervalID = window.setInterval(timer, 1000);
