$(function () {
  $("#image-design").click(function () {
    $("#image-design").slideDown("1000").hide("500");
    $("#design").show("1000");
  });
  $("#design").click(function () {
    $("#design").slideUp("1000");
    $("#image-design").slideDown("1000");
  });
});
