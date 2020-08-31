import React, { useEffect } from 'react';
import { useBlog } from '../modules/blogs';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

const BlogDetail = (props) => {
  const { blogId } = props;
  const { fetchBlog, isFetchBlog, blog } = useBlog();

  useEffect(() => {
    console.log('fetch blog');
    fetchBlog(blogId);
  }, []);

  if (isFetchBlog) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <Heading>{blog?.title}</Heading>
      <p>
        <Link to={'/category/' + blog?.category?.id}>
          {blog?.category?.name}
        </Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
    </div>
  );
};
export default BlogDetail;
