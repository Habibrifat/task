let products = {
  data: [
    {
      ProductName: "bag-white",
      category: "Bag",
      price: "30",
      image: "./image/boho-woohoo-camel-leather-shoulder-bag-747652.webp",
    },
    {
      ProductName: "Clothing bag-white ",
      category: "Clothing",
      price: "30",
      image: "./image/4-way-stretch-ankle-grey-active-pants-454401.webp",
    },
    {
      ProductName: "Clothing bag-white ",
      category: "Clothing",
      price: "30",
      image: "./image/abstract-checkboard-side-split-black-skirt-212884.webp",
    },
    {
      ProductName: "Clothing bag-white ",
      category: "Clothing",
      price: "30",
      image: "./image/abstract-checkboard-side-split-green-skirt-784606.webp",
    },
    {
      ProductName: "Clothing bag-white ",
      category: "Clothing",
      price: "30",
      image:
        "./image/abstract-pop-holiday-two-piece-blue-shirt-shorts-set-259877.webp",
    },
    {
      ProductName: "Shoes bag-white",
      category: "Shoes",
      price: "30",
      image:
        "./image/alpine-hiker-composite-toe-lace-up-brown-leather-boots-338695.webp",
    },
    {
      ProductName: "Shoes bag-white",
      category: "Shoes",
      price: "30",
      image:
        "./image/all-inclusive-high-top-brown-leather-sneakers-831490.webp",
    },
    {
      ProductName: "Shoes bag-white",
      category: "Shoes",
      price: "30",
      image: "./image/airy-hook-casual-black-lace-up-leather-boots-449323.webp",
    },
    {
      ProductName: "kids bag-white",
      category: "kids",
      price: "30",
      image: "./image/beacon-print-boy-blue-two-piece-tankini-set-722612.webp",
    },
    {
      ProductName: "beauty bag-white",
      category: "Beauty",
      price: "30",
      image: "./image/airy-lip-gloss-dewy-mist-series-p306-756265.webp",
    },
    {
      ProductName: "beauty bag-white",
      category: "Bag",
      price: "30",
      image: "./image/boho-woohoo-black-leather-shoulder-bag-947981.webp",
    },
    {
      ProductName: "beauty bag-white",
      category: "Bag",
      price: "30",
      image: "./image/boho-woohoo-camel-leather-shoulder-bag-747652.webp",
    },
    {
      ProductName: "beauty bag-white",
      category: "Bag",
      price: "30",
      image: "./image/foggy-scene-brown-suede-leather-shoulder-bag-239774.webp",
    },
    {
      ProductName: "jewellery bag-white",
      category: "Jewellery",
      price: "30",
      image: "./image/astronauts-bear-silver-long-chain-647133.webp",
    },
    {
      ProductName: "jewellery bag-white",
      category: "Swiming",
      price: "30",
      image: "./image/amphibious-activity-navy-swim-shorts-514254.webp",
    },
    {
      ProductName: "jewellery bag-white",
      category: "Swiming",
      price: "30",
      image: "./image/bat-man-black-swim-shorts-405435.webp",
    },
  ],
};
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", "swiper-slide", i.category, "hidden");

  let imgContainter = document.createElement("div");
  imgContainter.classList.add("card-image");

  let image = document.createElement("img");
  image.classList.add("w-full", "h-full", "object-cover");
  image.setAttribute("src", i.image);
  imgContainter.appendChild(image);
  card.appendChild(imgContainter);

  let container = document.createElement("div");
  container.classList.add("card-container", "text-center", "p-5");

  let name = document.createElement("p");
  name.classList.add("product-name", "text-base");
  name.innerText = i.ProductName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("p");
  price.classList.add("product-price");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("product-content").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active-border");
    } else {
      button.classList.remove("active-border");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (element.classList.contains(value)) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
}

window.onload = () => {
  filterProduct("Clothing");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
