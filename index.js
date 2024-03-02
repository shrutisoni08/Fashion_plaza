  // getting the Data from products.json
  let products = null;
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      console.log(products);
      addDataToHTML();
    });

  // add data products to HTML
  function addDataToHTML() {
    let listProduct = document.querySelector(".listProduct"); // Move this line inside the function
    products.forEach((product) => {
      // create new element item
      let newProduct = document.createElement("a");
      // add this element in listprodcut class
      // listProduct.appendChild(newProduct);
      newProduct.href = "productDisplay.html?id=" + product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
<div class="prodcts-displaybox">
  <div class="related-product-section">
    <div class="products-displaybox">
      <div class="product-display-flex-container scroll-caption">
        <div class="product-img">
          <img src="${product.image}" alt="" />
    <div class="products-details">
      <h3 class="product-details">${product.name}</h3>
  <h3 class="product-details">$ ${product.price}
    </h3>
    <img src="${product.hearticonfill}" />
    <img src="${product.hearticonfill}" />
    <img src="${product.hearticonfill}" />
    <img src="${product.hearticonfill}" />
    <img src="${product.hearticon}" />
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>

`;
      listProduct.appendChild(newProduct); // Add this line to append the new product element
    });
  }