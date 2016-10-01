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

  } else {
    //Open
    $(".sidebarContainer").css("right", "0%");
    $(".menuContainer").css("background", "transparent");
  }

  $(".sidebarContainer").css("transition", "right 1s, background 3s ease");
}
