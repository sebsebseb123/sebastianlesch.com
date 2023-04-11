import qs from 'qs';

/**
 * Get full Strapi URL from path.
 * @param {string} path Path of the URL.
 * @returns {string} Full Strapi URL.
 */
export const getStrapiURL = (path = '') => {
  return `${process.env.STRAPI_API_URL || "http://127.0.0.1:1337"}${path}`;
}

/**
 * Fetch data from Strapi.
 * @param {string} path Path of the API endpoint.
 * @param {object} params Query parameters, will be stringified.
 * @param {object} options Fetch options.
 * @returns {JSON} JSON response from Strapi.
 * @throws {Error} Error response from Strapi.
 */
export const fetchAPI = async (path, params = {}, options = {}) => {
  const apiPath = '/api' + path;

  // Merge options with default options.
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  // Stringify query parameters.
  const queryString = qs.stringify(params, { addQueryPrefix: true });
  const requestUrl = getStrapiURL(apiPath) + queryString;

  // Fetch data from Strapi.
  const response = await fetch(requestUrl, mergedOptions);

  // Handle errors.
  if (!response.ok) {
    const error = Error('An error occurred while fetching the data.');
    error.info = await response.json();
    error.requestUrl = requestUrl;
    error.status = response.status;
    throw error;
  }

  // Parse JSON response.
  const data = await response.json();

  return data;
}