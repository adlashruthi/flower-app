import "./Gallery1Styles.css";
import GalleryData from "./GalleryData";

function Gallery1() {
  return (
    <div className="g">
      <h1 className="Gallery">Gallery</h1>
      <div className="gallery">
        <div className="gallerycard">
          <GalleryData src="https://media.istockphoto.com/id/1319907279/photo/pink-rose-bush-in-the-evening-sun.jpg?b=1&s=170667a&w=0&k=20&c=B1wICFF9hAnzoh73UyqnWunEg4EIhne9d4Ysl_ISu9I=" />
          <GalleryData src="https://media.istockphoto.com/id/157399336/photo/a-large-bouquet-of-multicolored-flowers-of-different-species.jpg?b=1&s=170667a&w=0&k=20&c=DfwpYVwiXjKs8oeKObP5uDeaiNkpKY1JVDFMQoMlktM=" />
          <GalleryData src="https://media.istockphoto.com/id/1166042531/photo/beautiful-bouquet-in-a-red-box-on-white.jpg?b=1&s=170667a&w=0&k=20&c=Ab5yuJP05R2g89nWnmMOLTjeK3elOjkODKyiCPwDcgg=" />
        </div>
      </div>
    </div>
  );
}
export default Gallery1;
