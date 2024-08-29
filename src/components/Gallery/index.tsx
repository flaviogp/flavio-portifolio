import GalleryItem from "./GalleryItem";

import image1 from "../../../../../imgportifolio/agenda.png";
import image2 from "../../../../../imgportifolio/calculadora.jpeg";
import image3 from "../../../../../imgportifolio/clone-netflix.jpeg";

const Gallery = () => {
  return (
    <div className="flex overflow-auto w-full h-[250px] relative snap-x snap-mandatory">
      <GalleryItem link="google.com" url={image1} />
      <GalleryItem link="google.com" url={image2} />
      <GalleryItem link="google.com" url={image3} />
    </div>
  );
};

export default Gallery;
