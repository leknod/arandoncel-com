'use client';
import { useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const photos = [
  { src: "/images/gallery/photo-01.jpg", width: 1500, height: 1875, alt: "Frog - (Hyla meridionalis)", title: "Frog - (Hyla meridionalis)" },
  { src: "/images/gallery/photo-02.jpg", width: 1500, height: 1875, alt: "Jumping spider - (Philaeus chrysops)", title: "Jumping spider - (Philaeus chrysops)" },
  { src: "/images/gallery/photo-03.jpg", width: 1500, height: 1875, alt: "Ladybug", title: "Ladybug" },
  { src: "/images/gallery/photo-04.jpg", width: 1500, height: 1875, alt: "Crab spider with snack", title: "Crab spider with snack" },
  { src: "/images/gallery/photo-05.jpg", width: 1500, height: 1875, alt: "Bronze Ground Beetle - (Carabus nemoralis)", title: "Bronze Ground Beetle - (Carabus nemoralis)" },
  { src: "/images/gallery/photo-06.jpg", width: 1500, height: 1875, alt: "Spider", title: "Spider" },
  { src: "/images/gallery/photo-07.jpg", width: 1500, height: 1875, alt: "Big Robber Fly", title: "Big Robber Fly" },
  { src: "/images/gallery/photo-08.jpg", width: 1500, height: 1875, alt: "Lesser stag beetle - (Dorcus parallelipipedus)", title: "Lesser stag beetle - (Dorcus parallelipipedus)" },
  { src: "/images/gallery/photo-09.jpg", width: 1500, height: 1875, alt: "Ruby-tailed wasp - (chrysis ignata)", title: "Ruby-tailed wasp - (chrysis ignata)" },
  { src: "/images/gallery/photo-10.jpg", width: 1500, height: 1875, alt: "Acorn weevil - (Curculio glandium)", title: "Acorn weevil - (Curculio glandium)" },
  { src: "/images/gallery/photo-11.jpg", width: 1500, height: 1875, alt: "Jumping spider - (Evarcha Jucunda)", title: "Jumping spider - (Evarcha Jucunda)" },
  { src: "/images/gallery/photo-12.jpg", width: 1500, height: 1875, alt: "Opilion sp.", title: "Opilion sp." },
  { src: "/images/gallery/photo-13.jpg", width: 1500, height: 1875, alt: "Big Robber Fly", title: "Big Robber Fly" },
  { src: "/images/gallery/photo-14.jpg", width: 1500, height: 1875, alt: "Baby Mantis", title: "Baby Mantis" },
  { src: "/images/gallery/photo-15.jpg", width: 1500, height: 1875, alt: "Lynx spider with prey", title: "Lynx spider with prey" },
  { src: "/images/gallery/photo-16.jpg", width: 1500, height: 1875, alt: "Jumping spider - (Philaeus chrysops)", title: "Jumping spider - (Philaeus chrysops)" },
  { src: "/images/gallery/photo-17.jpg", width: 1500, height: 1875, alt: "Jumping spider - (Aelurillus v-insignitus)", title: "Jumping spider - (Aelurillus v-insignitus)" },
  { src: "/images/gallery/photo-18.jpg", width: 1500, height: 1875, alt: "Portrait of a Dragonfly", title: "Portrait of a Dragonfly" },
  { src: "/images/gallery/photo-19.jpg", width: 1500, height: 1875, alt: "Portrait of a Demoiselle", title: "Portrait of a Demoiselle" },
  { src: "/images/gallery/photo-20.jpg", width: 1500, height: 1875, alt: "Robber fly", title: "Robber fly" }
];

const thumbs = [
  { src: "/images/gallery/thumb-01.jpg", width: 500, height: 625, alt: "Frog - (Hyla meridionalis)", title: "Frog - (Hyla meridionalis)" },
  { src: "/images/gallery/thumb-02.jpg", width: 500, height: 625, alt: "Jumping spider - (Philaeus chrysops)", title: "Jumping spider - (Philaeus chrysops)" },
  { src: "/images/gallery/thumb-03.jpg", width: 500, height: 625, alt: "Ladybug", title: "Ladybug" },
  { src: "/images/gallery/thumb-04.jpg", width: 500, height: 625, alt: "Crab spider with snack", title: "Crab spider with snack" },
  { src: "/images/gallery/thumb-05.jpg", width: 500, height: 625, alt: "Bronze Ground Beetle - (Carabus nemoralis)", title: "Bronze Ground Beetle - (Carabus nemoralis)" },
  { src: "/images/gallery/thumb-06.jpg", width: 500, height: 625, alt: "Spider", title: "Spider" },
  { src: "/images/gallery/thumb-07.jpg", width: 500, height: 625, alt: "Big Robber Fly", title: "Big Robber Fly" },
  { src: "/images/gallery/thumb-08.jpg", width: 500, height: 625, alt: "Lesser stag beetle - (Dorcus parallelipipedus)", title: "Lesser stag beetle - (Dorcus parallelipipedus)" },
  { src: "/images/gallery/thumb-09.jpg", width: 500, height: 625, alt: "Ruby-tailed wasp - (chrysis ignata)", title: "Ruby-tailed wasp - (chrysis ignata)" },
  { src: "/images/gallery/thumb-10.jpg", width: 500, height: 625, alt: "Acorn weevil - (Curculio glandium)", title: "Acorn weevil - (Curculio glandium)" },
  { src: "/images/gallery/thumb-11.jpg", width: 500, height: 625, alt: "Jumping spider - (Evarcha Jucunda)", title: "Jumping spider - (Evarcha Jucunda)" },
  { src: "/images/gallery/thumb-12.jpg", width: 500, height: 625, alt: "Opilion sp.", title: "Opilion sp." },
  { src: "/images/gallery/thumb-13.jpg", width: 500, height: 625, alt: "Big Robber Fly", title: "Big Robber Fly" },
  { src: "/images/gallery/thumb-14.jpg", width: 500, height: 625, alt: "Baby Mantis", title: "Baby Mantis" },
  { src: "/images/gallery/thumb-15.jpg", width: 500, height: 625, alt: "Lynx spider with prey", title: "Lynx spider with prey" },
  { src: "/images/gallery/thumb-16.jpg", width: 500, height: 625, alt: "Jumping spider - (Philaeus chrysops)", title: "Jumping spider - (Philaeus chrysops)" },
  { src: "/images/gallery/thumb-17.jpg", width: 500, height: 625, alt: "Jumping spider - (Aelurillus v-insignitus)", title: "Jumping spider - (Aelurillus v-insignitus)" },
  { src: "/images/gallery/thumb-18.jpg", width: 500, height: 625, alt: "Portrait of a Dragonfly", title: "Portrait of a Dragonfly" },
  { src: "/images/gallery/thumb-19.jpg", width: 500, height: 625, alt: "Portrait of a Demoiselle", title: "Portrait of a Demoiselle" },
  { src: "/images/gallery/thumb-20.jpg", width: 500, height: 625, alt: "Robber fly", title: "Robber fly" }
];


export default function MyWork() {
  const [index, setIndex] = useState(-1);

  return(
    <section id="my-work" className="py-0.5 bg-black">
      <MasonryPhotoAlbum
        photos={thumbs}
        spacing={2}
        onClick={({ index }) => setIndex(index)}/>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map((photo) => ({
          src: photo.src,
          description: photo.alt,
        }))}
        index={index}
        plugins={[
          Captions,
          Zoom,
          Thumbnails,
          Fullscreen,
          Slideshow,
        ]}
        captions={{ descriptionTextAlign: "center" }}
        slideshow={{ autoplay: false, delay: 3000 }}
      />
    </section>
  );
}
