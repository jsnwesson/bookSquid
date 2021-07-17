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
    },
  };
  if (user !== null) {
    payloadHeader.headers.uid = user.uid;
  };
  return payloadHeader;
};

/////////////////// search axios methods ///////////////////

export const searchByCategory = async (searchInput) => {
  try {
    const res = await axios.get(`${url}/books/search/${searchInput}`);
    return res.data;
  }
  catch (e) {
    console.error(e);
  };
};

/////////////////// book axios methods ///////////////////

export const getRecentlyReviewed = async () => {
  const header = await createToken()
  try {
    const res = await axios.get(`${url}/books/recentlyReviewed`, header);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const recommendedBooks = async () => {
  try {
    const res = await axios.get(`${url}/books/recommended`);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const specificBookData = async (bookId) => {
  try {
    const res = await axios.get(`${url}/books/${bookId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const carouselMetaData = async () => {
  const header = await createToken();
  try {
    const res = await axios.get(`${url}/books/carouselMeta`, header);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const addBookToMongo = async (book) => {
  try {
    const res = await axios.post(`${url}/books/add`, book);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};


/////////////////// axios reviews methods ///////////////////

export const postBookReview = async (body, title, rating, bookId) => {
  const header = await createToken();
  const payload = {
    body,
    rating,
    title,
    bookId,
  };
  try {
    const res = await axios.post(`${url}/reviews`, payload, header);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const getBookReviews = async (bookId) => {
  try {
    const res = await axios.get(`${url}/reviews/${bookId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

/////////////////// axios user methods ///////////////////

export const createUser = async (uid, name, email, date) => {
  const payload = {
    uid,
    name,
    email,
    date: date.toISOString(),
  };
  try {
    const res = await axios.post(`${url}/user/create`, payload);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const addToList = async (listName, bookId) => {
  const header = await createToken();
  try {
    const res = await axios.post(`${url}/user/list`, { listName, bookId }, header);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const removeFromList = async (listName, bookId) => {
  const header = await createToken();
  try {
    const res = await axios.put(`${url}/user/list`, { listName, bookId }, header);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};

export const getUserData = async () => {
  const header = await createToken();
  try {
    const res = await axios.get(`${url}/user/profile`, header);
    return res.data;
  } catch (e) {
    console.error(e);
  };
};
