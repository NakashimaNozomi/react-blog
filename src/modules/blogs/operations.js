import { useDispatch } from 'react-redux';
import { fetchBlogListAction, successFetchBlogListAction } from './actions';
import { getApi } from '../../utils/index';

export const useBlogOperations = () => {
  const dispatch = useDispatch();

  const fetchBlogList = (req) => {
    dispatch(fetchBlogListAction());

    getApi('blogs', req).then((res) => {
      if (!res?.data?.contents) alert('contents not found.');
      dispatch(successFetchBlogListAction(res.data.contents));
    });
  };

  const fetchBlog = (key, req) => {
    dispatch(fetchBlogAction());
    getApi('blogs/' + key).then((res) => {
      console.log(res.data);
      dispatch(successFetchBlogAction(res.data));
    });
  };

  return { fetchBlogList, fetchBlog };
};
