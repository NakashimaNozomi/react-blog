import { useSelector } from 'react-redux';

export const blogList = useSelector((state) => state.blogList);
export const blog = useSelector((state) => state.blog);
export const isFetchBlogList = useSelector((state) => state.isFetchBlogList);
export const isFetchBlog = useSelector((state) => state.isFetchBlog);
