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

function showModel(){
  let myModal = new bootstrap.Modal(document.getElementById('formConfirm'), {});
  myModal.show();
}

function Opener() {

        var q1 = $('#q1').val() || 'no set';
        var q2 = $('#q2').val() || 'no set';
        var q3 = $('#q3').val() || 'no set';
        var q4 = $('#q4').val() || 'no set';
        var q5 = $('#q5').val() || 'no set';
        var q6 = $('#q6').val() || 'no set';
        var q7 = $('#q7').val() || 'no set';
        var q8 = $('#q8').val() || 'no set';
        var q9 = $('#q9').val() || 'no set';
        var q10 = $('#q10').val() || 'no set';
        var q11 = $('#q11').val() || 'no set';

        // post
        var data = {
            'entry.1288720830': firstname,
            'entry.895148635': lastname,
            'entry.1026251436': email,
            'entry.863726186': phone,
            'entry.1551171303': age


        };
        $.ajax({
          type: 'POST',
          url: '',
          data: data,
          contentType: 'application/json',
          dataType: 'jsonp',
          complete: function() {
            alert('Form submitted successfully');
          }
        });
    }