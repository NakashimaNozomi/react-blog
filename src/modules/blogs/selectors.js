import { useSelector, shallowEqual } from 'react-redux';

export const useBlogSelectors = () => {
  const blogList = useSelector((state) => state.blogList, shallowEqual);
  const blog = useSelector((state) => state.blog, shallowEqual);
  const isFetchBlogList = useSelector((state) => state.isFetchBlogList);
  const isFetchBlog = useSelector((state) => state.isFetchBlog);
  return {
    blogList,
    blog,
    isFetchBlogList,
    isFetchBlog,
  };
};
