export default function VideoComp(props) {
  return (
    <a href={props.href} className="video-tile-container">
      <article className="video-list">
        <section className="thumbnail-section">
          <img className="thumbnail" src={props.src} alt="" />
        </section>
        <section className="title-section">
          <h2 className="video-title">{props.title}</h2>
          <section className="details-section">
            <h4 className="channel-name">{props.channelName}</h4>
            <p className="video-views">{props.videoViews}</p>
            <p className="upload-date">{props.uploadDate}</p>
          </section>
        </section>
        <section className="moreOptions-section">
          <button className="moreOptions">
            <img
              className="moreOptions-img"
              src="/src/assets/icons/more-options.svg"
              alt="more option button"
            />
          </button>
        </section>
      </article>
    </a>
  );
}
