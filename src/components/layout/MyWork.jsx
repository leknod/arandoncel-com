'use client';
import { useState } from "react";
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const photos = [
  { src: "/images/gallery/01.png", width: 781, height: 983, alt: "Foto 1" },
  { src: "/images/gallery/02.png", width: 774, height: 971, alt: "Foto 1" },
  { src: "/images/gallery/03.png", width: 779, height: 975, alt: "Foto 1" },
  { src: "/images/gallery/04.png", width: 781, height: 975, alt: "Foto 1" },
  { src: "/images/gallery/05.png", width: 783, height: 974, alt: "Foto 1" },
];

export default function MyWork() {
  const [index, setIndex] = useState(-1);

  return(
    <section id="my-work" className="bg-black h-dvh">
      <MasonryPhotoAlbum
        photos={photos}
        spacing={2}
        onClick={({ index }) => setIndex(index)}/>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map((photo) => ({
          src: photo.src,
          title: photo.alt,
        }))}
        index={index}
        plugins={[Captions]}
        captions={{ descriptionTextAlign: "center" }}
      />
    </section>
  );
}
