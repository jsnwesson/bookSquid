import axios from 'axios';
import fire from '../fire';

const url = 'http://localhost:4200/api';

const createToken = async () => {
  const user = fire.auth().currentUser;
  const token = user && (await user.getIdToken());
  const payloadHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      uid: token ? user.uid : ''
    },
  };
  return payloadHeader;
};

// export const addToReadBookList = async (title, author, genre) => {
//   const header = await createToken();
//   const payload = {
//     title,
//     author,
//     genre,
//   }
//   try {
//     const res = await axios.post(url + '/add-read-book', payload, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getAlreadyReadList = async () => {
//   const header = await createToken();
//   try {
//     const res = await axios.get(url + '/get-read-book', header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const addToFavoriteList = async (uid, gid, list_name) => {
//   const header = await createToken();
//   const payload = {
//     gid,
//     list_name
//   }
//   try {
//     const res = await axios.post(url, payload, header)
//     return res.data
//   } catch (e) {
//     console.error(e);
//   }
// };

export const postBookReview = async (body, title, rating, bookId) => {
  const header = await createToken();
  const payload = {
    body,
    rating,
    title,
    bookId,
  }
  try {
    const res = await axios.post(url + '/reviews', payload, header)
    return res.data
  } catch (e) {
    console.error(e);
  }
  /**
   * response returns: status code 201
   */
};

export const getBookReviews = async (bookId) => {
  const header = await createToken();
  try {
    const res = await axios.get(url + `/reviews/${bookId}`, header)
    return res.data
  } catch (e) {
    console.error(e);
  }
  /** response returns: status code 200
    *  response.data = {
    *    name: 'STRING',
    *    title: 'STRING',
    *    body: 'STRING',
    *    rating: NUMBER,
    *    date: ISO DATE in STRING format,
    *  }
    */
};

export const carouselMetaData = async () => {
  const header = await createToken();
  try {
    const res = await axios.post(url + '/carouselMeta', null, header)
    return res.data
  } catch (e) {
    console.error(e);
  }
  /** response returns: status code 200
  *  response.data = {
  *    authors: [ 'STRING', ... ],
  *    bookId: 'STRING',
  *    title: 'STRING',
  *    image: 'STRING', // this should be the thumbnail image
  *  }
  */
};

export const specificBookData = async (bookId) => {
  const header = await createToken();
  try {
    const res = await axios.post(`${url}/books/${bookId}`, null, header)
    return res.data
  } catch (e) {
    console.error(e);
  }
};

  /** response returns: status code 200
  *  response.data = {
  *    description: 'STRING',
  *    publishedDate: 'STRING',
  *    authors: [ 'STRING', ... ],
  *    genre: 'STRING',
  *    title: 'STRING',
  *    image: 'STRING', // this should be the larger image
  *  }
  */


export const searchByCategory = async (category, searchInput) => {
  const header = await createToken();
  const payload = {
    category,
    searchInput,
  }
  try {
    const promise1 = axios.get(`${url}/books/search`, payload, header)
    const promise2 = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=20`);
    Promise.all([promise1, promise2])
      .then((res) => {
        return res.data
      })
  } catch (e) {
    console.error(e);
  }

  /**

  --------------> response returns an array of objects <--------------
  response returns: status code 200

  if the book title is in our database our book data object will be at index 0 of the response array

  if the book title is found in our DB the zero index in the array will look like this:

      response.data = {
        img: String,
        title: String,
        authors: [String],
        reviews: [String],
        totalRating: Number,
        description: String,
        publishedDate: String,
        thumbnail: String,
        genre: String,
        bookId: { type: String, unique: true },
      }

  after the first index in the array, the remaining objects will be in googles response format

  if the book title was not in our databas then all of the objects in the array will be in
  googles API response format

  */
};
