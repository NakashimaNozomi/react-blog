import { initialState } from '../initialState';

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
