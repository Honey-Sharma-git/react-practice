import { useState } from "react";
import { products } from "../src/scripts/productData.js";
import { priceFormatter, productPrice } from "../src/utils/productPrice.js";
export function ProductGrid() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  // document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  //   button.addEventListener("click", () => {
  //     console.log("clicked");
  //   });

  const bookmarkImg = {
    filled: "src/assets/images/logo/bookmark-filled.png",
    empty: "src/assets/images/logo/bookmark-empty.png",
  };

  const [bookmark, setBookmark] = useState(false);

  function toggleBookmark() {
    setBookmark((prev) => {
      return !prev;
    });
  }
  const bookmarkImage = bookmark ? bookmarkImg.filled : bookmarkImg.empty;
  const productList = products.map((product) => {
    return (
      <section className="card" key={product.id}>
        <div className="discount-flag">{product.discount}</div>
        <figure>
          <img
            className="star-ratings"
            src={`src/assets/images/ratings/rating-${
              product.ratings.stars * 10
            }.png`}
            alt="star-ratings"
          />
          <span>{product.ratings.rating}</span>
        </figure>
        <figure onClick={toggleBookmark}>
          <img src={bookmarkImage} alt="" />
        </figure>
        <img
          className="product-img"
          src={product.image.src}
          alt={product.image.alt}
        />
        <h2 className="product-title">{product.productName}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <p>Price: Rs. {priceFormatter(product)}</p>
          <span>
            MRP: <span className="mrpPrice"> {productPrice(product)}</span>
          </span>
        </div>
        <form method="post" onSubmit={handleSubmit} className="card-form">
          <label htmlFor="productQty">Product Qty:</label>
          <select name="productQty" id="productQty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="productSize">Select size</label>
          <label htmlFor="size-s">
            <input type="radio" name="productSize" id="size-s" value="S" />S
          </label>
          <label htmlFor="size-m">
            <input type="radio" name="productSize" id="size-m" value="M" />M
          </label>
          <label htmlFor="size-l">
            <input type="radio" name="productSize" id="size-l" value="L" />L
          </label>
          <button
            data-product-id={product.id}
            className="js-add-to-cart"
            value="Add to cart"
          >
            Add to Cart
          </button>
        </form>
      </section>
    );
  });
  return (
    <main>
      <article className="card-container">{productList}</article>
    </main>
  );
}
