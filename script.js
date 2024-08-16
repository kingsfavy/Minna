
document.getElementById('menuIcon').addEventListener('click', function(event) {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'none') {
        menuContent.style.display = 'block';
        setTimeout(function() {
            menuContent.style.right = '0';
        }, 10); // Small delay to allow the display change to take effect
    } else {
        menuContent.style.right = '-250px';
        setTimeout(function() {
            menuContent.style.display = 'none';
        }, 300); // Match the CSS transition duration
    }
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'block' && !menuContent.contains(event.target) && !event.target.matches('#menuIcon')) {
        menuContent.style.right = '-250px';
        setTimeout(function() {
            menuContent.style.display = 'none';
        }, 300); // Match the CSS transition duration
    }
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

