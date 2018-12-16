var heading = document.querySelector('h1'); //применить для всех данных этого селектора
var heading1 = document.getElementById("colorite");

setInterval(function() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) + ')';

  heading1.style.color = hue;
}, 1000);