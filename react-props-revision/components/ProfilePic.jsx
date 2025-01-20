const ProfilePic = ({ url, alt }) => {
  const style = { borderRadius: "50%" };
  return (
    <figure>
      <img style={style} src={url} alt={alt} />
    </figure>
  );
};
export { ProfilePic };
