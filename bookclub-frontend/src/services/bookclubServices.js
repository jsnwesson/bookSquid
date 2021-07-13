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
      uid: user.uid,
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

// export const getReadBookList = async () => {
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

export const postBookReview = async (message, rating) => {
  const header = await createToken();
  const payload = {
    message,
    rating
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
    *    message: 'STRING',
    *    rating: NUMBER,
    *    date: ISO DATE in STRING format,
    *  }
    */
};