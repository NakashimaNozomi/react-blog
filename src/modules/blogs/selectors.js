import { useSelector } from 'react-redux';

export const useBlogSelectors = () => {
  const blogList = useSelector((state) => state.blogList);
  const blog = useSelector((state) => state.blog);
  const isFetchBlogList = useSelector((state) => state.isFetchBlogList);
  const isFetchBlog = useSelector((state) => state.isFetchBlog);
  return {
    blogList,
    blog,
    isFetchBlogList,
    isFetchBlog,
  };
};
