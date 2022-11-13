import "./Gallery1Styles.css";

function GalleryData(props) {
  return (
    <div className="g-card">
      <div className="g-image">
        <img src={props.src} alt="image" />
      </div>
    </div>
  );
}

export default GalleryData;
