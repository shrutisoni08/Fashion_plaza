document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    // getting data from products.json
    let products = null;
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        products = data;
        console.log(products);
        showDetails();
        // find this product
        function showDetails() {
          let detail = document.querySelector('.detail');
          let newDetail = document.querySelector('.newDetail');
          let productID = new URLSearchParams(window.location.search).get("id");
          let thisProduct = products.filter((value) => {
            return value.id == productID;
          })[0];
          // if there is no product has id = productID
          // => return to home page
          if (!thisProduct) {
            window.location.href = "/";
          }
          // and if has, add data this products in HTML
            detail.querySelector(".showImg").src = thisProduct.image;
            newDetail.querySelector(".ProductName").innerText = thisProduct.name;
            newDetail.querySelector(".ProductPrice").innerText = "$" + thisProduct.price;
            newDetail.querySelector(".description").innerText =
              thisProduct.description;
  
            // add data similar products
            // show all products
            let listProdcut = document.querySelector(".listProduct");
            products
              .filter((value) => value.id != productID)
              .forEach((product) => {
                let newProduct = document.createElement("a");
                newProduct.href = "productDisplay.html?id=" + product.id;
                newProduct.classList.add("item");
                newProduct.innerHTML += `

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
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            `;
                listProdcut.appendChild(newProduct);
              });
          
        }
      });
  });