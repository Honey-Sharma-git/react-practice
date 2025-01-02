export default function Card(props) {
  return (
    <article className="card-container">
      <section className="card">
        <figure className="card__product-img-container">
          <img className="product-img" src={props.imgSrc} alt={props.imgAlt} />
        </figure>
        <h3 className="card__product-title limit-text-to-1-line">
          {props.productName}
        </h3>
        <figure className="card__product-ratings-container">
          <img
            className="product-ratings-stars"
            src={props.ratingsStars}
            alt={props.ratingsAlt}
          />
          <span className="product-ratings-count">{props.ratingsCount}</span>
        </figure>
        <p className="card__product-price">
          Rs. {Intl.NumberFormat("en-IN").format(props.price)}
        </p>
        <form className="card__productQty-button">
          <select className="productQty" name="productQty" id="productQty">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select>
          <button className="addToCart-button">Add to Cart</button>
        </form>
      </section>
    </article>
  );
}
