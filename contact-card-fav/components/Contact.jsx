export default function Contact() {
  return (
    <article className="contact-card">
      <figure className="pic-container">
        <img className="pic" src="/src/assets/image/user.png" alt="" />
      </figure>
      <figure className="star-container">
        <img className="star" src="/src/assets/image/star-empty.png" alt="" />
      </figure>
      <h1 className="contact-name">Honey Sharma</h1>

      <p className="contact-mobile details-container">
        <span className="title">Mobile:</span> <span className="data">924293424</span>
      </p>

      <p className="contact-email details-container">
        <span className="title">Email:</span> <span className="data">aldfhasldfh@gmail.com</span>
      </p>

      <p className="contact-about details-container">
        <span className="title">About:</span>
        <span className="data">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volupta
        </span>
      </p>
    </article>
  );
}
