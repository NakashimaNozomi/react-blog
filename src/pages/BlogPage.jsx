import React from 'react';
import { useParams } from 'react-router-dom';

import BlogList from '../containers/BlogList';
import BlogDetail from '../containers/BlogDetail';

const BlogPage = () => {
  const { key } = useParams();

  let content;
  if (!key) {
    content = <BlogList />;
  } else {
    content = <BlogDetail blogId={key} />;
  }
  return <>{content}</>;
};

export default BlogPage;
