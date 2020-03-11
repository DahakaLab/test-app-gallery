import * as t from 'io-ts';

const IOGalleryImage = t.type({
  url: t.string,
  width: t.number,
  height: t.number,
});

const IOGalleryImagesData = t.interface({
  galleryImages: t.array(IOGalleryImage),
});

export type GalleryImage = t.TypeOf<typeof IOGalleryImage>;
export type GalleryImagesData = t.TypeOf<typeof IOGalleryImagesData>;

export { IOGalleryImage };
export default IOGalleryImagesData;
