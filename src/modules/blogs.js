import { useSelector, useDispatch } from 'react-redux';
import { getApi } from '../utils/index';

// actions
export const fetchBlogListAction = () => ({
  type: 'FETCH_BLOG_LIST',
});

export const successFetchBlogListAction = (payload) => ({
  type: 'SUCCESS_FETCH_BLOG_LIST',
  payload,
});

export const fetchBlogAction = () => ({
  type: 'FETCH_BLOG',
});

export const successFetchBlogAction = (payload) => ({
  type: 'SUCCESS_FETCH_BLOG',
  payload,
});

// reducer
const initialState = {
  blogList: [],
  isFetchBlogList: false,
  blog: null,
  isFetchBlog: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BLOG_LIST': {
      return {
        ...state,
        isFetchBlogList: true,
      };
    }
    case 'SUCCESS_FETCH_BLOG_LIST': {
      return {
        ...state,
        isFetchBlogList: false,
        blogList: action.payload,
      };
    }

    case 'FETCH_BLOG': {
      return {
        ...state,
        isFetchBlog: true,
      };
    }
    case 'SUCCESS_FETCH_BLOG': {
      return {
        ...state,
        isFetchBlog: false,
        blog: action.payload,
      };
    }
    default:
      return state;
  }
};

export const useBlog = () => {
  const blogList = useSelector((state) => state.blogList);
  const isFetchBlogList = useSelector((state) => state.isFetchBlogList);
  const dispatch = useDispatch();
  const isFetchBlog = useSelector((state) => state.isFetchBlog);
  const blog = useSelector((state) => state.blog);

  const fetchBlogList = (req) => {
    dispatch(fetchBlogListAction());

    getApi('blogs', req).then((res) => {
      if (!res?.data?.contents) alert('contents not found.');
      dispatch(successFetchBlogListAction(res.data.contents));
    });
  };

  const fetchBlog = (key) => {
    dispatch(fetchBlogAction());
    getApi('blogs/' + key).then((res) => {
      console.log(res.data);
      dispatch(successFetchBlogAction(res.data));
    });
  };

  return {
    blogList,
    isFetchBlogList,
    fetchBlogList,
    blog,
    isFetchBlog,
    fetchBlog,
  };
};

export default useBlog;
