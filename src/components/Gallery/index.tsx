import GalleryItem from "./GalleryItem";

import ifoodClone from "../../assets/images/gallery/ifood-clone.png";
import tripReservation from "../../assets/images/gallery/trip-reservation.png";

const Gallery = () => {
  return (
    <div className="flex overflow-auto w-full h-[250px] relative snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
      <GalleryItem link="https://google.com" url={ifoodClone} />
      <GalleryItem link="google.com" url={tripReservation} />
      {/* <GalleryItem link="google.com" url={image3} /> */}
    </div>
  );
};

export default Gallery;
