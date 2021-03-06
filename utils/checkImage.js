/**
 * Check image
 * @param {Object} image 
 */

const checkImage = (image, size) => {
  const BASE_API = 'http://10.0.2.2:1337';
  let imagePath = '/uploads/traicay_c08ff14b3b.gif';

  if (size === "thumbnail" && image.formats.thumbnail) {
    imagePath = image.formats.thumbnail.url;
  }

  if (size === "large" && image.formats.large) {
    imagePath = image.formats.large.url;
  }

  if (size === "medium" && image.formats.medium) {
    imagePath = image.formats.medium.url;
  }

  if (size === "small" && image.formats.small) {
    imagePath = image.formats.small.url;
  }

  if (image.url) {
    imagePath = image.url;
  }

  return `${BASE_API}${imagePath}`;
}

export default checkImage;