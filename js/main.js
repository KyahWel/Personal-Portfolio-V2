var navbar = document.getElementById("nav");
var aLinks = navbar.getElementsByTagName("a");
var sticky = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
const toggleButton = document.getElementById("darkButton");
const techstackColor = document.getElementById("techstack");
const icon = toggleButton.querySelector("i");
const bodyChildren = document.querySelector("body");

let isDarkMode = true;

window.addEventListener('scroll', function() {

  //Sticky Navbar
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  //Activate nav link when the sectio is on viewport
  let currentSection = null;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 66;
    if (window.pageYOffset >= sectionTop) {
      currentSection = section;
    }
  });

  if (currentSection) {
    const currentLinkId = currentSection.getAttribute("id");
    const currentLink = document.getElementById(currentLinkId+"Button");
    if (!currentLink.classList.contains("active")) {
      navLi.forEach((li) => {
        li.classList.remove("active");
      });
      currentLink.classList.add("active");
    }
  }
});

//Smooth Scrolling
navbar.addEventListener("click", function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === "A") {
      const clickedId = clickedElement.getAttribute("id");
      const targetElement = document.getElementById(clickedId.slice(0, -6));
      if (targetElement) {
        event.preventDefault();
        const offsetTop = targetElement.offsetTop - 66;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    }
});

//Toggle Dark Mode
toggleButton.addEventListener("click", function() {
        if(isDarkMode) {
        bodyChildren.classList.toggle("dark-theme"); 
        bodyChildren.classList.toggle("light-theme");
        bodyChildren.childNodes[1].classList.toggle("dark-theme-nav")
        bodyChildren.childNodes[1].classList.toggle("light-theme-nav")
        toggleButton.style.color = "#151618"
        techstackColor.style.color = "#151618"
        icon.classList.add("fa-regular");
        icon.classList.remove("fa-solid");
        isDarkMode = false;
    }
    else{
        isDarkMode = true;
        bodyChildren.classList.toggle("light-theme");  
        bodyChildren.classList.toggle("dark-theme"); 
        bodyChildren.childNodes[1].classList.toggle("light-theme-nav")
        bodyChildren.childNodes[1].classList.toggle("dark-theme-nav")
        toggleButton.style.color = "#f5f5f5"
        techstackColor.style.color = "#f5f5f5"
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    }
});

// Active navs
for (var i = 0; i < aLinks.length; i++) {
  aLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    if (!this.classList.contains("active")) {
      this.classList.add("active");
    }
  });
}






