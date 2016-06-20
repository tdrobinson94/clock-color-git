var timer = function () {
var clock = new Date;

var justHours = clock.getHours();
var justMinutes = clock.getMinutes();
var justSeconds = clock.getSeconds();

var time = document.querySelector('.clock');
time.innerHTML = (justHours + ":" + justMinutes + ":" + justSeconds)
console.log('hey')
};
var intervalID = window.setInterval(timer, 1000);
