// Endpoint base url
const url = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Fetch api wrapper
 * @param {*} endpoint
 * @param {*} opts
 */
const fetchApi = async (endpoint, opts) => {
  return await fetch(`${url}/v1/${endpoint}`, opts);
};

/**
 * Searches for posts in typicode
 * @param {string} text
 */
const searchPosts = async () => {
  const response = await fetchApi('posts', { mode: 'cors' });
  const resWrapper = await response.json();
  if (response.status >= 400) {
    console.log(resWrapper);
    throw new Error(resWrapper);
  }
  return resWrapper;
};

export { searchPosts, fetchApi };
