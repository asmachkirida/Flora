// Objects 
let products = {
    data: [
      {
        productName: "Wonderful Orange Daisies",
        category: "Orange",
        price: "35",
        image: "Pictures/B1.jpg",
      },
      {
        productName: "Royal Blue Hydrangea ",
        category: "White",
        price: "30",
        image: "Pictures/B2.jpg",
      },
      {
        productName: "Beautiful White Peonies",
        category: "White",
        price: "40",
        image: "Pictures/B3.jpg",
      },
      {
        productName: "Delicate Winter Bouquet",
        category: "Pink",
        price: "38",
        image: "Pictures/B4.jpg",
      },
      {
        productName: "Pink Peonies Bouquet",
        category: "Pink",
        price: "35",
        image: "Pictures/B5.jpg",
      },
      {
        productName: "White Gerbera Daisies",
        category: "White",
        price: "32",
        image: "Pictures/B6.jpg",
      },
      {
        productName: "Fabulous Tulips Bouquet",
        category: "Pink",
        price: "45",
        image: "Pictures/B7.jpg",
      },
      {
        productName: "Sweet Savannah Bouquet",
        category: "Pink",
        price: "42",
        image: "Pictures/B30.jpg",
      },
      {
        productName: "Cute Eustoma Bouquet",
        category: "White",
        price: "38",
        image: "Pictures/B9.jpg",
      },
      {
        productName: "Dark Roses Bouquet",
        category: "Pink",
        price: "38",
        image: "Pictures/B26.jpg",
      },
      {
        productName: "Pink Hydrangea Bouquet",
        category: "Pink",
        price: "35",
        image: "Pictures/B100.jpg",
      },
      {
        productName: "Luxury Spring Flowers",
        category: "Orange",
        price: "32",
        image: "Pictures/B12.jpg",
      },
      {
        productName: "Mothers Day Bouquet",
        category: "Yellow",
        price: "35",
        image: "Pictures/B27.jpg",
      },
      {
        productName: "Delightful Tulip Bouquet",
        category: "Pink",
        price: "42",
        image: "Pictures/B14.jpg",
      },
      {
        productName: "Korean Roses Bouquet",
        category: "White",
        price: "40",
        image: "Pictures/B15.jpg",
      },
      {
        productName: "Fall Luxury Flowers",
        category: "Yellow",
        price: "35",
        image: "Pictures/B24.jpg",
      },
      {
        productName: "Orange Tulip Bouquet",
        category: "Orange",
        price: "32",
        image: "Pictures/B17.jpg",
      },
      {
        productName: "Delicate Pivoine Flowers",
        category: "Pink",
        price: "38",
        image: "Pictures/B18.jpg",
      },
    
    ],
  };
 // Creating Products 
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    let price = document.createElement("h6");
    price.classList.add("product-price");
    price.innerText =  i.price +"$" ;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  // Filter Functions + Random Display of 2 products 
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });

      //Display 2 cards randomly
  let elementz = document.querySelectorAll(".card");
  for(var i=0;i<2;i++){
    var j=Math.floor(Math.random()*18);
  if (value == "random") 
  {
    elementz[j].classList.remove("hide");
  } else {
    if (elementz[j].classList.contains(value)) {
      elementz[j].classList.remove("hide");
    } else {
      elementz[j].classList.add("hide");
    }
  }}

  }
  
  //Search 
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });

//Price 
document.getElementById("prix").addEventListener("change", () => {
 prices=document.getElementById("prix").value;
 let elements = document.querySelectorAll(".product-price");
 let cards = document.querySelectorAll(".card");
 var A;
 elements.forEach((element, index) => {
  if (parseInt(element.innerText)<= prices) {
    cards[index].classList.remove("hide");
  } else {
    cards[index].classList.add("hide");
  }
});
document.getElementById("Val").innerHTML=prices+"$";
});


