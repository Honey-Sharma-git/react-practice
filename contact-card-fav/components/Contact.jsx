import React from "react";
export default function Contact(props) {
  //De-structured props to supply data:
  const { firstName, lastName, mobile, email, about, src, alt } = props;

  //  React state for toggling favorite
  const [isFavorite, setIsFavorite] = React.useState(false);

  //Updating state on clicking star button
  function toggleFavorite() {
    setIsFavorite((prev) => {
      return !prev;
    });
  }

  //File path for star-icon:
  const favorite = {
    filled: { src: "/src/assets/image/star-filled.png", alt: "Favorite" },
    empty: { src: "/src/assets/image/star-empty.png", alt: "Not favorite" },
  };

  return (
    <article className="contact-card">
      <figure className="pic-container">
        <img className="pic" src={src} alt={alt} />
      </figure>

      <figure
        className="star-container"
        //Function to toggle state
        onClick={toggleFavorite}
      >
        <img
          className="star"
          //   Changing star-icon image according to boolean
          src={isFavorite ? favorite.filled.src : favorite.empty.src}
          alt={isFavorite ? favorite.filled.alt : favorite.empty.alt}
        />
      </figure>
      <h1 className="contact-name">
        {firstName} {lastName}
      </h1>

      <p className="contact-mobile details-container">
        <span className="title">Mobile:</span>
        <span className="data">{mobile}</span>
      </p>

      <p className="contact-email details-container">
        <span className="title">Email:</span>
        <span className="data">{email}</span>
      </p>

      <p className="contact-about details-container">
        <span className="title">About:</span>
        <span className="data">{about}</span>
      </p>
    </article>
  );
}
