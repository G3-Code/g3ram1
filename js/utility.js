$(document).ready(function() {
  $(".sidenav").sidenav({ edge: "right" });
  $(".tooltipped").tooltip();
  $(".scrollspy").scrollSpy();
  $(".modal").modal();

  $(window).scroll(function() {
    // alert("scrolling window");
    var cont_height = $(".content-wrapper").outerHeight();
    var scroll_top = $(window).scrollTop();
    var doc_height = $(window).outerHeight();
    var progress = (scroll_top / (cont_height - doc_height)) * 100;

    // range of progress
    function round(val, min, max) {
      return val > max ? max : val < min ? min : val;
    }

    var final_val = round(progress, 0, 100);
    $(".progress-bar").attr("value", final_val);
  });
});

function changeProfileImageToColor() {
  var profileImage = document.getElementById("profile-picture");
  profileImage.src = "../img/g3ram_profile_color.png";
}

function changeProfileImageToPencil() {
  var profileImage = document.getElementById("profile-picture");
  profileImage.src = "../img/g3ram_profile_color.jpg";
}

function changeAwardImageToColor() {
  var profileImage = document.getElementById("award-picture");
  profileImage.src = "../img/award-aoy.png";
}

function changeAwardImageToPencil() {
  var profileImage = document.getElementById("award-picture");
  profileImage.src = "../img/award-aoy.jpg";
}
