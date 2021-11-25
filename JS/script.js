/* Side menu */
$(".open-menu-btn").on("click", function () {
  if ($("body").hasClass("closed-menu")) {
    $("body").removeClass("closed-menu");
  } else $("body").addClass("closed-menu");
}); 

/* Accordion voor opleidingen */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}