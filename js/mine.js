// Carousel Home Page
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("sho__pic__img");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

// Small Menu
function op() {
  var op = document.getElementById('opcl');
  var m = document.getElementById('m');
  var x = document.getElementById('x');
  var ab = document.querySelector('.abo');
  ab.style.marginTop = '330px';
  op.style.display = 'block';
  m.style.display = 'none';
  x.style.display = 'block';
}

function cl() {
  var op = document.getElementById('opcl');
  var cl = document.getElementById('opcl');
  var m = document.getElementById('m');
  var x = document.getElementById('x');
  var ab = document.querySelector('.abo');
  cl.style.display = 'none';
  ab.style.marginTop = '30px';
  op.style.display = 'none';
  m.style.display = 'block';
  x.style.display = 'none';
}