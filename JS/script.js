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
$(function () {
  $("#image-dev").click(function () {
    $("#image-dev").slideDown("1000").hide("500");
    $("#development").show("1000");
  });
  $("#development").click(function () {
    $("#development").slideUp("1000");
    $("#image-dev").slideDown("1000");
  });
});

$(function () {
  $("#image-product").click(function () {
    $("#image-product").slideDown("1000").hide("500");
    $("#product").show("1000");
  });
  $("#product").click(function () {
    $("#product").slideUp("1000");
    $("#image-product").slideDown("1000");
  });

  $(function () {
    $("#image1").hover(function () {
      $("#image1").css("filter", "brightness(60%)");
      $("#column1").toggle();
    });
    $("#image2").hover(function () {
      $("#image2").css("filter", "brightness(60%)");
      $("#column2").toggle();
    });
    $("#image3").hover(function () {
      $("#image3").css("filter", "brightness(60%)");
      $("#column3").toggle();
    });
    $("#image4").hover(function () {
      $("#image4").css("filter", "brightness(60%)");
      $("#column4").toggle();
    });
    $("#image5").hover(function () {
      $("#image5").css("filter", "brightness(60%)");
      $("#column5").toggle();
    });
    $("#image6").hover(function () {
      $("#image6").css("filter", "brightness(60%)");
      $("#column6").toggle();
    });
    $("#image7").hover(function () {
      $("#image7").css("filter", "brightness(60%)");
      $("#column7").toggle();
    });
    $("#image8").hover(function () {
      $("#image8").css("filter", "brightness(60%)");
      $("#column8").toggle();
    });
  });
});

function validateform() {
  let name = document.myForm.inputName.value;
  let email = document.myForm.inputEmail.value;
  let message = document.myForm.inputMessage.value;

  if (name == null || name == "") {
    alert("Please fill in your name");
    return false;
  } else if (email == null || email == "") {
    alert("Please enter your email!");
    return false;
  } else if (message == null || message == "") {
    alert("Kindly write your message");
    return false;
  } else {
    alert(
      "Thank you " + name + " for contacting us, your message has been received"
    );
  }
}
