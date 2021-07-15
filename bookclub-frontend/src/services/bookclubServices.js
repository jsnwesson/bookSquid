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
      // uid: user.uid
    },
  };
  if (user.uid) {
    payloadHeader.headers.uid = user.uid;
  }
  return payloadHeader;
};

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
  console.log(bookId);
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
    // if user isn't logged in, can't populate nor display expected data
    console.log(header);
    const res = await axios.get(url + '/carouselMeta', header)
    return res.data
  } catch (e) {
    console.error(e);

  }
  /** response returns:

   status code 200

    response.data = [
      {
        authors: [String],
        reviews: [String],
        img: String,
        title: String,
        totalRating: Number,
        description: String,
        publishedDate: String,
        thumbnail: String,
        genre: String,
        bookId: { type: String, unique: true },
      },{
        ...
      }
    ]
  */
};

export const specificBookData = async (bookId) => {
  const header = await createToken();
  try {
    const res = await axios.get(`${url}/books/${bookId}`, header)
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


export const searchByCategory = async (searchInput) => {
  try {
    const res = await axios.get(`${url}/books/search/${searchInput}`)
    return res.data
  }
  catch (e) {
    console.error(e);
  }

  /**
  --------------> response returns an array of objects <--------------
  response returns:

    status code 200

    response.data = [
      {
        authors: [String],
        reviews: [String],
        img: String,
        title: String,
        totalRating: Number,
        description: String,
        publishedDate: String,
        thumbnail: String,
        genre: String,
        bookId: { type: String, unique: true },
      },{
        ...
      }
    ]

  */
};

export const createUser = async (uid, name, email, date) => {
  const payload = {
    uid,
    name,
    email,
    date: date.toISOString(),
  }
  try {
    const res = await axios.post(url + '/user/create', payload)
    return res.data
  } catch (e) {
    console.error(e);
  }
};

export const addToList = async (listName, bookId) => {
  const header = await createToken();
  try {
    const res = await axios.post(url + '/user/list', { listName, bookId }, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const removeFromList = async (listName, bookId) => {
  const header = await createToken();
  try {
    const res = await axios.put(url + '/user/list', { listName, bookId }, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getUserData = async () => {
  const header = await createToken();
  try {
    const res = await axios.get(`${url}/user/profile`, header);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}