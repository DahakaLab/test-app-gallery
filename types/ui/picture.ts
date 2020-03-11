export type Image = {
  src: string;
  alt?: string;
  type?: 'image/jpg' | 'image/png';
}

export interface UiPictureInfo extends Image {
  src: string;
  alt: string;
  images: {
    mobile?: Image;
    tablet?: Image;
    desktop?: Image;
  };
}
