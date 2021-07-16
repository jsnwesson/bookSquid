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
  return await axios.get(`${url}/books/search/${searchInput}`)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

/////////////////// book axios methods ///////////////////

export const getRecentlyReviewed = async () => {
  const header = await createToken()
  return axios.get(`${url}/books/recentlyReviewed`, header)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const recommendedBooks = () => {
  return axios.get(`${url}/books/recommended`)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const specificBookData = (bookId) => {
  return axios.get(`${url}/books/${bookId}`)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const carouselMetaData = async () => {
  const header = await createToken();
  return axios.get(`${url}/books/carouselMeta`, header)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const addBookToMongo = (book) => {
  return axios.post(`${url}/books/add`, { book })
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
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
  return axios.post(`${url}/reviews`, payload, header)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const getBookReviews = (bookId) => {
  return axios.get(`${url}/reviews/${bookId}`)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

/////////////////// axios user methods ///////////////////

export const createUser = (uid, name, email, date) => {
  const payload = {
    uid,
    name,
    email,
    date: date.toISOString(),
  };
  return axios.post(`${url}/user/create`, payload)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const addToList = async (listName, bookId) => {
  const header = await createToken();
  return axios.post(`${url}/user/list`, { listName, bookId }, header)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const removeFromList = async (listName, bookId) => {
  const header = await createToken();
  return axios.put(`${url}/user/list`, { listName, bookId }, header)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const getUserData = async () => {
  const header = await createToken();
  return axios.get(`${url}/user/profile`, header)
    .then((result) => {
      return result.data;
    })
    .catch((e) => {
      console.error(e);
    });
};
