import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchBlogListAction, successFetchBlogListAction } from './actions';

const PATH = 'http://localhost:4010/';
// const PATH = 'https://react-blog.microcms.io/api/v1/';

export const fetchBlogList = () => {
  // dispatch(fetchBlogListAction());
  // dispatch(successFetchBlogListAction([{ id: 1, title: 'hoge' }]));
  axios.get(PATH + 'blogs', params).then((res) => {
    console.log(res.data);
    //   dispatch(actions.successFetchBlogListAction(res.data));
  });
};

export const fetchBlog = (key, callback) => {
  // dispatch(actions.fetchBlogAction());
  // axios.get(PATH + 'blogs/' + key).then((res) => {
  //   dispatch(actions.successFetchBlogAction(res.data));
  //   if (callback) callback(res);
  // });
};
