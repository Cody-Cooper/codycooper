var nav = document.getElementById("hamburger");
var navlinks = nav.getElementsByClassName(".mobile-nav-link");

function toggleNav() {
  nav.classList.contains("active")
    ? nav.classList.remove("active") & console.log("Hamburger menu closed")
    : nav.classList.add("active") & console.log("Hamburger menu opened");
}

document.getElementById("nav-icon").addEventListener("click", function (e) {
  e.preventDefault();
  toggleNav();
});

for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", function () {
    toggleNav();
  });
}
