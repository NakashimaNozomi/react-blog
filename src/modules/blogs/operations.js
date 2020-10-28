import { useDispatch } from 'react-redux';
import {
  fetchBlogListAction,
  successFetchBlogListAction,
  fetchBlogAction,
  successFetchBlogAction,
} from './actions';
import { getApi } from '../../utils/index';

export const useBlogOperations = () => {
  const dispatch = useDispatch();

  const fetchBlogList = (req) => {
    dispatch(fetchBlogListAction());

    getApi('blogs', req).then((res) => {
      if (!res?.data?.contents) alert('contents not found.');
      dispatch(successFetchBlogListAction(res.data));
    });
  };

  const fetchBlog = (key, req) => {
    dispatch(fetchBlogAction());
    getApi('blogs/' + key).then((res) => {
      dispatch(successFetchBlogAction(res.data));
    });
  };

  return { fetchBlogList, fetchBlog };
};
