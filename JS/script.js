$(".open-menu-btn").on("click", function () {
    if ($("body").hasClass("closed-menu")) {
      $("body").removeClass("closed-menu");
    } else $("body").addClass("closed-menu");
  });  

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var submenu = this.nextElementSibling;
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });
}
  if ($("body").hasClass("closed-menu")) {
    $("body").removeClass("closed-menu");
  } else $("body").addClass("closed-menu");
}); 
