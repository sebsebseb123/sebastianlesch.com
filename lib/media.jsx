import { getStrapiURL } from "./api";

/**
 * Get the full URL of a Strapi media.
 * @param {object} media Media object.
 * @returns {string} Full URL of the media.
 */
export const getStrapiMedia = (media) => {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
};