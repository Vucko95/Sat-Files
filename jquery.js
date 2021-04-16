// Trainings Transformation
$("box-trans").hide();
$(document).ready(function () {
  $("#btnFadeOut").click(function () {
    $("#box-trans").fadeOut("slow", function () {
      $("#btnFadeOut").text("Hide It");
    });
  });
});
$(document).ready(function () {
  $("#btnFadeIn").click(function () {
    $("#box-trans").fadeIn("slow", function () {
      $("#btnFadeIn").text("Hard Work Pays Off");
    });
  });
});
$(document).ready(function () {
  $("#box-trans").fadeOut("fast");
});

// BMI text
