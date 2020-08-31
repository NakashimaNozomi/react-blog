import React, { useEffect } from 'react';
import { useBlog } from '../modules/blogs';
import { useParams } from 'react-router-dom';

import BlogList from '../containers/BlogList';
import BlogDetail from '../containers/BlogDetail';

const BlogPage = () => {
  const { fetchBlogList, isFetchBlogList, blogList } = useBlog();
  useEffect(() => {
    console.log('fetch list');

    fetchBlogList();
  }, []);

  const { key } = useParams();

  let content;
  if (isFetchBlogList) {
    return <p>loading...</p>;
  }

  if (!key) {
    content = <BlogList blogList={blogList} loding={isFetchBlogList} />;
  } else {
    content = <BlogDetail blogId={key} />;
  }
  return <>{content}</>;
};

export default BlogPage;
