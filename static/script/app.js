const sidenava = document.getElementsByClassName("sidenava");
var urlval = window.location.href.split('/')[4];

for(let i=0; i<(document.getElementsByClassName('sidenava')).length; i++){
  if(document.getElementsByClassName('sidenava')[i].id == urlval)
  {
    document.getElementById(document.getElementsByClassName('sidenava')[i].id).classList.add("mystyle");
  }
}

// Function to scroll to the top of the page
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show/hide the "Go to Top" button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("goToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// function openNav() {
//     document.getElementById("sidenav").style.width = "20%";
//     document.getElementById("main").style.marginLeft = "20%";
//   }

//   function closeNav() {
//     document.getElementById("sidenav").style.width = "0%";
//     document.getElementById("sidenav").style.padding = "-10%";
//     document.getElementById("main").style.marginLeft= "0%";
//   }

  function openNav() {
    document.getElementById("sidenav").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    // Additional styling when the sidebar is open
    document.getElementById("main").style.width = "80%";
    document.getElementById("main").style.transition = "width 0.5s";
    // You can add more styling if needed
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0%";
    document.getElementById("sidenav").style.padding = "-10%";
    document.getElementById("main").style.marginLeft = "0%";
    // Additional styling when the sidebar is closed
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.transition = "width 0.5s";
    // You can add more styling if needed
}

