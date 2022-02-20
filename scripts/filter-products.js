const filterDiv = document.querySelector(".product-container .product-sidebar");
const productWrapper = document.querySelector(".product-wrapper");
const footerDiv = document.querySelector("footer");
const bodyDiv = document.querySelector("body");

const filterIcon = document.querySelector(".product-wrapper button");
const crossIcon = document.querySelector(".product-sidebar button");

const showFilter = () => {
  filterDiv.classList.add("show-filter");
  productWrapper.classList.add("hide-div");
  footerDiv.classList.add("hide-div");
  bodyDiv.classList.add("overflowY-hidden");
};

const hideFilter = () => {
  filterDiv.classList.remove("show-filter");
  productWrapper.classList.remove("hide-div");
  footerDiv.classList.remove("hide-div");
  bodyDiv.classList.remove("overflowY-hidden");
};

filterIcon.addEventListener("click", showFilter);
crossIcon.addEventListener("click", hideFilter);
