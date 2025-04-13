---
layout: null
---
// Get the button:
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//toc-accordion
var tocacc = document.getElementsByClassName("toc-button");
var iacc;

for (iacc = 0; iacc < tocacc.length; iacc++) {
  tocacc[iacc].addEventListener("click", function() {
    this.classList.toggle("toc-button-active");
    var tocbox = document.getElementsByClassName("toc-box");
    if (tocbox.style.display === "block") {
    } else {
      tocbox.style.display = "block";
    }
  });
}