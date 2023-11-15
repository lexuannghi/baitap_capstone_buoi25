$(function () {
  $("#btnSignup").click(function () {
    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();
    var repassword = $('input[name="repassword"]').val();
    var name = $('input[name="name"]').val();
    var phone = $('input[name="phone"]').val();

    var check = true;

    $("label").remove(".error");

    if (email == "") {
      $('input[name="email"')
        .parent()
        .append("<label class='error'>Please press your email.</label>");
      check = false;
    } else {
      if (ValidateEmail(email) == false) {
        $('input[name="email"').parent().append("<label class='error'>Email Invalid.</label>");
        check = false;
      }
    }
    if (name == "") {
      $('input[name="name"')
        .parent()
        .append("<label class='error'>Please press your name.</label>");
      check = false;
    }
    if (password == "") {
      $('input[name="password"')
        .parent()
        .append("<label class='error'>Please press your password.</label>");
      check = false;
    }

    if (repassword == "") {
      $('input[name="repassword"')
        .parent()
        .append("<label class='error'>Please press repassword.</label>");
      check = false;
    } else {
      if (repassword != password) {
        $('input[name="repassword"')
          .parent()
          .append("<label class='error'>Password confirm not same password.</label>");
        check = false;
      }
    }
    if (phone == "") {
      $('input[name="phone"')
        .parent()
        .append("<label class='error'>Please press your phone.</label>");
      check = false;
    } else {
      if (ValidatePhone(phone) == false) {
        $('input[name="phone"').parent().append("<label class='error'>Your phone Invalid.</label>");
        check = false;
      }
    }

    if ($('input[name="gender"]').is(":checked") == false) {
      $('input[name="gender"').parent().addClass("error");
      check = false;
    } else {
      $('input[name="gender"').parent().removeClass("error");
    }

    console.log(email);
    console.log(String(password));
    console.log(repassword);
    console.log(name);
    console.log(String(phone));

    var gender = $('input[name="gender"]:checked').val();
    console.log(gender);
    var data = { email: email, password: password, name: name, gender: gender, phone: phone };
    // data["email"] = email;
    // data["password"] = password;
    // data["name"] = name;
    // data["gender"] = Boolean(gender);
    // data["phone"] = phone;

    // console.log(data);
    // console.log(JSON.stringify(data));
    if (check) {
      $.ajax({
        type: "POST",
        data: JSON.stringify(data),
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
          if (res.statusCode == 200) {
            alert("Sign up successfully! Please check in console log.");
            console.log(res);
            console.log("Email: " + res.content.email);
            console.log("Name: " + res.content.name);
            console.log("Password: " + res.content.password);
            console.log("Phone: " + res.content.phone);
            console.log("Gender: " + (res.content.gender == true ? "Male" : "Female"));
          }
        },
        error: function (xhr, status, error) {
          alert(
            "Email is duplicate Or " +
              status +
              " " +
              error +
              " " +
              xhr.status +
              " " +
              xhr.statusText
          );
        },
      });
    } else {
      return false;
    }
  });
});

function ValidatePhone(inputtxt) {
  var phoneno = /^(09[0-9]|07[0|6|7|8|9]|03[2-9]|08[1-6]|08[8-9])+([0-9]{7})\b/g;
  if (phoneno.test(inputtxt)) {
    return true;
  } else {
    return false;
  }
}

function ValidateEmail(inputtxt) {
  var email = /^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;
  if (email.test(inputtxt)) {
    return true;
  } else {
    return false;
  }
}
