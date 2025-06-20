const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SMALL BICYCLE",
    price: 8,
    colors: [
      {
        code: "pink",
        img: "./img2/pink.kid-removebg-preview.png",
      },
      
    ],
  },
  {
    id: 2,
    title: "TWO PEOPLE BICYCLE",
    price: 10,
    colors: [
      {
        code: "black",
        img: "./img2/black-removebg-preview.png",
      },
      
    ],
  },
  {
    id: 3,
    title: "BABY BICYCLE",
    price: 5,
    colors: [
      {
        code: "red",
        img: "./img2/red-removebg-preview.png",
      },
    
    ],
  },
  {
    id: 4,
    title: "FAMILY BICYCLE",
    price: 12,
    colors: [
      {
        code: "yellow",
        img: "./img2/yellow-removebg-preview.png",
      },
      
    ],
  },
    {
    id: 5,
    title: "MAP",
    price: 12,
    colors: [
      {
        code: "",
        img: "",
      },
      
    ],
  },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

