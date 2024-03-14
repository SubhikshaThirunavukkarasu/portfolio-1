// Modal Image Gallery
function onClick(element) {
    document.getElementById("modal01").style.display = "block";
    document.getElementById("img01").src = element.src;
    document.getElementById("caption").innerHTML = element.alt;
  }
  // Close the Modal
function closeModal() {
    document.getElementById("modal01").style.display = "none";
  }
  // Close the Modal
  var modal = document.getElementById("modal01");
  
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  // Change style of navbar on scroll
  window.onscroll = function () {
    myFunction();
  };
  
  function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      navbar.className = "navbar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
      navbar.className = navbar.className.replace(
        " w3-card w3-animate-top w3-white",
        ""
      );
    }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function toggleNavMenu(event) {
    var navDemo = document.getElementById("navDemo");
    if (navDemo.className.indexOf("responsive") == -1) {
      navDemo.className += " responsive";
    } else {
      navDemo.className = navDemo.className.replace(" responsive", "");
    }
    
    // Remove 'active' class from all navbar items
    var navbarItems = document.getElementsByClassName("navbar-item");
    for (var i = 0; i < navbarItems.length; i++) {
      navbarItems[i].classList.remove("active");
    }
    
    // Add 'active' class to the clicked navbar item
    event.currentTarget.classList.add("active");
  }
  
  function toggleImageInfo(image) {
    image.nextElementSibling.classList.toggle('show');
  }

  function toggleInfo() {
    var info = document.querySelector('.image-info');
    info.classList.toggle('show');
  }
  