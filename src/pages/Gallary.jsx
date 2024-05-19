import { Helmet } from "react-helmet";
import PhotoAlbum from "react-photo-album";
import photos from "./Photos.jsx";

const Gallary = () => {
  return (
    <div >
       <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery</title>
      </Helmet>
        <h1 className="text-5xl text-center text-[#004274] font-bold my-20">Showcased Your Dream</h1>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
};

export default Gallary;
