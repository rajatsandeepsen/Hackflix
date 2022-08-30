var getCookies = function(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
   return (cookies);
}

function checkCookie() {
  var cookies = getCookies()
  console.log(cookies.hackflix);
  if (cookies.hackflix == "1") {

        console.log(cookies.hackflix);
        document.getElementById("right").style.display="flex";
        Closer();//show after and hide form

    
  } else {
    console.log(cookies.hackflix);
        document.getElementById("right").style.display="flex";
        document.getElementById("form").style.display="flex";
        document.getElementById("after").style.display="none";

        const x=20;//days of the cookies validity
        const d = new Date();
        d.setTime(d.getTime() + (x*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = "hackflix=1;"+"expires="+expires+";path=/";
     }
}

function retry() {
    //console.log(cookies.hackflix);
    document.cookie = "hackflix=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    //console.log(cookies.hackflix);
    //console.log(hackflix.hackflix);
    history.go(0);
}

function closeright() {
    document.getElementById("right").style.display="none";
    document.getElementById("leftopenbutton").style.display="block";
}

function Showright() {
    document.getElementById("right").style.display="flex";
    document.getElementById("leftopenbutton").style.display="none";
}


function Opener(){


    
    document.getElementById("darker").style.display = "block";
    document.getElementById("popup").style.display = "flex" ;
}

function Closer() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("darker").style.display = "none";
    document.getElementById("form").style.display="none";
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