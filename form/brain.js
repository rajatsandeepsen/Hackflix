
function closeright() {
    document.getElementById("right").style.display="none";
    document.getElementById("leftopenbutton").style.display="block";
    document.getElementById("leftopenbutton2").style.display="block";
}

function Showright() {
    document.getElementById("right").style.display="flex";
    document.getElementById("after").style.display="flex";

    document.getElementById("leftopenbutton").style.display="none";
    document.getElementById("leftopenbutton2").style.display="none";
}

function Closer() {
    document.getElementById("leftopenbutton").style.display="none";
    document.getElementById("leftopenbutton2").style.display="none";
    document.getElementById("right").style.display="flex";
    document.getElementById("after").style.display="flex";
}

//for timer
var countDownDate = new Date("Oct 20, 2022 12:00:00").getTime();
var x = setInterval(function()
{

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("timer").innerHTML = "HACKFLIX 2022 will starts in" + "<BR>" + days + "<b> days </b> " + hours + " hours "+ minutes + " mins " + seconds + " sec";


    if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "HACKFLIX 2022 STARTED";
        }

}, 1000);