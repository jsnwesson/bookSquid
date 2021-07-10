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
  return payloadHeader;
};

export const addToReadBookList = async (title, author, genre) => {
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
  const header = await createToken();
  try {
    const res = await axios.get(url + '/get-read-book', header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}