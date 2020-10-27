import React, { useEffect, useDispatch } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogOperations } from '../modules/blogs/operations';
import { useBlogSelectors } from '../modules/blogs/selectors';

import BlogList from '../containers/BlogList';
import BlogDetail from '../containers/BlogDetail';

const BlogPage = () => {
  const { fetchBlogList } = useBlogOperations();
  const { blogList, isFetchBlogList, blog, isFetchBlog } = useBlogSelectors();
  const { key } = useParams();

  useEffect(() => {
    console.log('fetch list');
    fetchBlogList();
  }, []);

  let content;
  if (isFetchBlogList || isFetchBlog) {
    return <p>loading...</p>;
  }

  if (!key) {
    content = <BlogList blogList={blogList} loding={isFetchBlogList} />;
  } else {
    content = <BlogDetail blog={blog} loding={isFetchBlog} />;
  }

  return <>{content}</>;
};

export default BlogPage;
