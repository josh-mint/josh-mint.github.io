// Giỏ hàng dropdown
const cartIcon = document.querySelector('.shopping-cart-icon');
const cartDropdownContent = document.querySelector('.cart-dropdown-content');
const cartDropdownArrow = document.querySelector('.dropdown-arrow-container');

// Click icon giỏ hàng để hiện / ẩn giao diện dropdown
cartIcon.onclick = function () {
  cartDropdownContent.classList.toggle('show');
  cartDropdownArrow.classList.toggle('show');
}

// Click bên ngoài ẩn giỏ hàng
window.onclick = function (event) {
  if (!cartIcon.contains(event.target) && !cartDropdownContent.contains(event.target)) {
    if (cartDropdownContent.classList.contains('show')) {
      cartDropdownContent.classList.remove('show');
      cartDropdownArrow.classList.remove('show');
    }
  }
}