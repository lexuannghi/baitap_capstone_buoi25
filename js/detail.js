window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  //call api load lên giao diện
  $.ajax({
    type: "GET",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
    dataType: "json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg",
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log("success", data);
    },
    error: function (xhr, status, error) {
      alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
    },
  });
};

window.onload = function () {
  //call api load lên giao diện
  $.ajax({
    type: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
    dataType: "json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg",
      "Content-Type": "application/json",
    },
    success: function (data) {
      // console.log('success',data);
      var html = "";
      var dem = 0;
      $.each(data.content, function (i, item) {
        // console.log(item);
        // '<div class="col-lg-4">'+
        html +=
          '<div class="card text-left">' +
          '<img class="card-img-top" src="' +
          item.image +
          '" alt="">' +
          '<div class="card-body">' +
          '<h4 class="card-title">' +
          item.name +
          "</h4>" +
          '<div class="rectangle rectangle-2 text-center">' +
          '<a href="./detail.html?productid=' +
          item.id +
          '" class="text-white">Buy now</a>' +
          "</div>" +
          '<div class="rectangle rectangle-3 text-right">' +
          '<p class="price">' +
          item.price +
          "$</p>" +
          "</div>" +
          "</div>" +
          "</div>";
        dem++;
        if (dem == 6) return false;
        // '</div>'
      });
      $("#lstProduct").append(html);
    },
    error: function (xhr, status, error) {
      alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
    },
  });

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  //call api load lên giao diện
  $.ajax({
    type: "GET",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
    dataType: "json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg",
      "Content-Type": "application/json",
    },
    success: function (data) {
      console.log("success", data);
      $("title").text(data.content.name);
      $(".name").text(data.content.name);
      $(".shortDescription").text(data.content.shortDescription);
      $(".detail-img").attr("src", data.content.image);
      $(".price-detail").text(data.content.price + "$"); 

      var html = "";
      $.each(data.content.size, function (i, item) {
        html += '<button class="btn-size">' + item + "</button>";
      });
      $(".rectangle-5").append(html);
    },
    error: function (xhr, status, error) {
      alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
    },
  });
};

var quantityDisplay = document.getElementById("quantity-display");
var cartCountDisplay = document.getElementById("cart-count");

function updateQuantity(delta) {
  var currentQuantity = parseInt(quantityDisplay.innerHTML);
  var newQuantity = Math.max(currentQuantity + delta, 1);
  quantityDisplay.innerHTML = newQuantity;
  updateTotalPrice(); // Cập nhật giá tiền sau khi thay đổi số lượng
}

function increaseQuantity() {
  updateQuantity(1);
}

function decreaseQuantity() {
  updateQuantity(-1);
}

function addToCart() {
  var currentQuantity = parseInt(quantityDisplay.innerHTML);
  var currentCartCount = parseInt(cartCountDisplay.innerHTML);

  // Cập nhật số lượng trong giỏ hàng
  cartCountDisplay.innerHTML = currentCartCount + currentQuantity;
}






