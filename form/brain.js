//for timer
var countDownDate = new Date("Nov 18, 2022 09:00:00").getTime();
var x = setInterval(function()
{

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("timer").innerHTML = "HACKFLIX 2022 will starts in "+ "<br>" + days + " days " + hours + " hours "+ minutes + " mins " + seconds + " sec";


    if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "HACKFLIX 2022 STARTED";
        }

}, 1000);
// for the scroll Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.remove("invisible");
      
    }
    else reveals[i].classList.add("invisible");
  }
}

window.addEventListener("scroll",reveal);

// for the FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// function Opener() {

//         var firstname = $('#firstname').val() || 'no set';
//         var lastname = $('#lastname').val() || 'no set';
//         var email = $('#email').val() || 'no set';
//         var phone = $('#phone').val() || 'no set';
//         var age = $('#age').val() || 'no set';

//         // post
//         var data = {
//             'entry.1288720830': firstname,
//             'entry.895148635': lastname,
//             'entry.1026251436': email,
//             'entry.863726186': phone,
//             'entry.1551171303': age


//         };
//         $.ajax({
//           type: 'POST',
//           url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCv-Z-HzftAWR6WcKAsaD3dEaqJYOfcpn3YuyQgpDZ8gb6yw/formResponse',
//           data: data,
//           contentType: 'application/json',
//           dataType: 'jsonp',
//           complete: function() {
//             alert('Registration Success');
//           }
//         });
//     }