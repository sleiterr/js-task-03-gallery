const outputGallery = document.querySelector(".output-gallery");

const galleryImages = [
  {
    src: "https://picsum.photos/300/300?random=1",
    title: "Billedoverskrift 1",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=2",
    title: "Billedoverskrift 2",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=3",
    title: "Billedoverskrift 3",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=4",
    title: "Billedoverskrift 4",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=5",
    title: "Billedoverskrift 5",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=6",
    title: "Billedoverskrift 6",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=7",
    title: "Billedoverskrift 7",
    caption: "Beskrivelse...",
  },
  {
    src: "https://picsum.photos/300/300?random=8",
    title: "Billedoverskrift 8",
    caption: "Beskrivelse...",
  },
];

galleryImages.forEach((item) => {
  outputGallery.innerHTML += `
    <div class='.gallery-content'>
    <img src=${item.src} alt='${item.title}' class='img'>
    <h4 class='img-title'>${item.title}</h4>
    <p class='img-subtitle'>${item.caption}</p>
    <div>
    `;
});
