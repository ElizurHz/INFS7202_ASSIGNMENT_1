// Form Sumbition of Login
function submit() {
  checkInput();
  // submition
}

// Input Format Check of Login
function checkInput() {
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  if (!email.value) {
    alert("Email address cannot be empty!");
  } else if (!isEmail(email.value)) {
    alert("Please enter correct email address!");
  }
  if (!password.value) {
    alert("Password cannot be empty!");
  }
}

// Email Format Checking
function isEmail(str) {
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(str);
}


function clearWords() {
  document.getElementById('title_input').value = "";
  document.getElementById('comment_input').value = "";
}

$(function() {
  $('.uploaded_pics img, #upload_logo, .albums ul li img').mouseenter(function () {
    $(this).animate({
      opacity:.66
    },200);
  });
  $('.uploaded_pics img, #upload_logo, .albums ul li img').mouseleave(function () {
    $(this).animate({
      opacity:1
    },200);
  });
});
