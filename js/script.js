$(document).ready(function() {

  orderClouds(6, 11, "multipleClouds", 3000);

  function orderClouds(min, max, id, interval) {
    var cloudType = "clouds" + min;
    var cloudNum = min;
    setInterval(function() {
      $("#" + id).css("background", "transparent url('img/bgimages/" + cloudType + ".png') repeat top center");
      cloudNum++;
      if (cloudNum == max) cloudNum = min;
      cloudType = "clouds" + cloudNum;
    }, interval);
  }

});
