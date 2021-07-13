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

export const addToReadBookList = async (title, author, genre) => {
  /// these need to be modified to work with new DB schema and changes
  // just here for reference
  const header = await createToken();
  const payload = {
    title,
    author,
    genre,
  }
  try {
    const res = await axios.post(url + '/add-read-book', payload, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getReadBookList = async () => {
  /// these need to be modified to work with new DB schema and changes
  // just here for reference
  const header = await createToken();
  try {
    const res = await axios.get(url + '/get-read-book', header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const addToFavoriteList = async (uid, gid, list_name) => {
  const header = await createToken();
  const payload = {
    gid,
    list_name
  }
  try {
    const res = await axios.post(url, payload, header)
    return res.data
  } catch (e) {
    console.error(e);
  }
};

export const postBookReview = async (body, title, rating, bookId) => {
  console.log('running service');
  const header = await createToken();
  const payload = {
    body,
    rating,
    title,
    bookId
  }
  try {
    const res = await axios.post(url + '/reviews', payload, header)
    return res.data
  } catch (e) {
    console.error(e);
  }
};