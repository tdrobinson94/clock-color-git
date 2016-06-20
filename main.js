var timer = function () {
var clock = new Date;

var justHours = clock.getHours();
var justMinutes = clock.getMinutes();
var justSeconds = clock.getSeconds();

if (justHours > 12){
  justHours = justHours - 12;
}

var time = document.querySelector('.clock');
time.innerHTML = (justHours + ":" + justMinutes + ":" + justSeconds)
};
var intervalID = window.setInterval(timer, 1000);
