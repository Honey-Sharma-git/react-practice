import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import productData from "./scripts/productData";
export default function App() {
  const card = productData.map((product) => {
    return (
      <Card
        key={product.id}
        productName={product.title}
        imgSrc={product.img.src}
        imgAlt={product.img.alt}
        ratingsStars={product.ratings.stars}
        ratingsAlt={product.ratings.alt}
        ratingsCount={product.ratings.count}
        price={product.price}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="main">{card}</main>
      <Footer />
    </>
  );
}
