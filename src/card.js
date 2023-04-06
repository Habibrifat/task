// Set the default active category
document
  .querySelector(".category[data-category='Clothing']")
  .classList.add("active-border");
showProducts("Clothing");

// Show the products for the selected category
document.querySelectorAll(".category").forEach(function (category) {
  category.addEventListener("click", function () {
    document
      .querySelector(".category.active-border")
      .classList.remove("active-border");
    this.classList.add("active-border");
    showProducts(this.getAttribute("data-category"));
  });
});

function showProducts(category) {
  document.querySelectorAll(".card").forEach(function (product) {
    if (product.classList.contains(category)) {
      product.style.display = "inline-block";
    } else {
      product.style.display = "none";
    }
  });
}
