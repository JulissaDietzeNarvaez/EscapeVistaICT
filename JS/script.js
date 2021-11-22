$(".open-menu-btn").on("click", function () {
  if ($("body").hasClass("closed-menu")) {
    $("body").removeClass("closed-menu");
  } else $("body").addClass("closed-menu");
}); 



var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}