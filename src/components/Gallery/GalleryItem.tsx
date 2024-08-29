interface GalleryItemProps {
  link: string;
  url: string;
}

const GalleryItem = ({ link, url }: GalleryItemProps) => {
  return (
    <a
      href={link}
      className="w-full h-full sticky left-0 shrink-0  scroll-smooth"
    >
      <img src={url} alt="" className="w-full h-full object-cover" />
    </a>
  );
};

export default GalleryItem;
