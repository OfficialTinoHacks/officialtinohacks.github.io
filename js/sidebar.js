var sidebarIsOpen = false;

$("#menuBtn").click(function(e) {
  e.preventDefault();
  if (sidebarIsOpen == false) {
    sidebarIsOpen = true;
  } else {
    sidebarIsOpen = false;
  }

  controlSidebar();

  $(this).toggleClass("active");

});

$("#sidebarCircle").click(function(e) {
  e.preventDefault();
  sidebarIsOpen = false;
  controlSidebar();
  $(".nav-toggle").removeClass("active");
});

function controlSidebar() {
  if (!sidebarIsOpen) {
    //Close
    $(".sidebarContainer").css("right", "-50%");
    $(".menuContainer").css("background", "black");
    $("body").css("margin-right", "0%");
  } else {
    //Open
    $(".sidebarContainer").css("right", "0%");
    $(".menuContainer").css("background", "transparent");
    $("body").css("margin-right", "25%");
  }
}
