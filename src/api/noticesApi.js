import axios from 'axios';

export const fetchNotices = async (url, query, token) => {
  if (!query) {
    const { data } = await axios.get(`${url}/notices/sell`);

    const { notices } = data.data;
    return notices;
  } else if (!token) {
    const { data } = await axios.get(`${url}/notices/${query}`);
    const { notices } = data.data;
    return notices;
  }
  const { data } = await axios({
    method: 'get',
    url: `${url}/notices/find/${query}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const { pets } = data.data;
  return pets;
};

export const fetchSearch = async (url, query) => {
  const { data } = await axios.get(`${url}/notices/search/${query}`);

  const { news } = data.data;
  return news;
};

export const fetchAddFavorite = async (url, query, token) => {
  const { data } = await axios({
    method: 'patch',
    url: `${url}/notices/addfavorite/${query}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { notices } = data.data;
  return notices;
};

export const fetchRemoveFavorite = async (url, query, token) => {
  const { data } = await axios({
    method: 'patch',
    url: `${url}/notices/deletefavorite/${query}`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return data;
};

// export const fetchSellNotices = async () => {
//     const {data} = await axios.get('/notices/sell');
//     const { notices } = data.data;
//     return data.data.notices;
// };

// export const fetchForFreeNotices = async () => {
//     const {data} = await axios.get('/notices/for-free');
//     const {notices}
//     return data.data.notices;
// };

// export const fetchLostFoundNotices = async () => {
//     const {data} = await axios.get('/notices/lost-found');

//     return data.data.notices;
// };
