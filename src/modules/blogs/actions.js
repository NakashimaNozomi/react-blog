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
