// Lấy vị trí document trước khi scroll để xử lý ẩn giỏ hàng dropdown
var prevScrollPos = window.scrollY;

// Code tạo hiệu ứng xuất hiện thanh màu đen và ẩn giỏ hàng dropdown khi scroll
window.onscroll = function () {
  // Hiện thanh menu
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%, 0)";
  }
  // Ẩn lại thanh menu khi người dùng kéo lên lại
  else {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%, -100%)";
  }

  // Ẩn giỏ hàng dropdown chỉ khi người dùng scroll xuống
  var currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    cartDropdownContent.classList.remove('show');
    cartDropdownArrow.classList.remove('show');
  }
  prevScrollPos = currentScrollPos
};

// Truncate Card Title
// thư viện load code xong thì hàm mới chạy
window.addEventListener("load", function () {
  truncateCardTitle();
});

function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (var i = 0; i < cardList.length; i++) {
    // lấy nội dung ra xử lý
    var text = cardList[i].innerHTML;
    // độ dài đếm cả khoảng trắng
    var newText = truncateString(text, 15);

    // xử lý xông => gắn lại nội dung để hiển thị lên giao diện
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// Navigate Log In
// const logInNavigate = () => {
//   window.location = "../index.html";
// };

// document.getElementById("logIn__button").onclick = function () {
//   logInNavigate();
// };

// // Navigate Sign Up
// const signUpNavigate = () => {
//   window.location = "../Pages/signUp.html";
// };

// document.getElementById("signUp__button").onclick = function () {
//   signUpNavigate();
// };

/* Sidebar Mini */
var toggleBtn = document.querySelector(".sidebarMini__button");
var sidebarMini = document.querySelector(".sidebarMini");
var switchBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});

switchBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("darkMode");
});