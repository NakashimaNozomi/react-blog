import axios from 'axios';

// const PATH = 'http://localhost:4010/';
const PATH = 'https://react-blog.microcms.io/api/v1/';

export const getApi = (url, params) => {
  return axios
    .get(PATH + url, setHeader(params))
    .catch((error) => alert(error.message));
};

export const postApi = (url, params) => {
  return axios
    .post(PATH + url, setHeader(params))
    .catch((error) => alert(error.message));
};

const setHeader = (params) => {
  return {
    params: {
      ...params,
    },
    headers: {
      'X-API-KEY': '8a583462-4ec7-4f42-be92-2aa7e97d5350',
    },
  };
};

export const removeHtmlTags = (richText) => {
  return richText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
};
