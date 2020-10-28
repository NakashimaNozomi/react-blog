import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogOperations } from '../modules/blogs/operations';
import { useBlogSelectors } from '../modules/blogs/selectors';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

const BlogDetailPage = () => {
  const { fetchBlog } = useBlogOperations();
  const { blog, isFetchBlog } = useBlogSelectors();
  const { key } = useParams();

  useEffect(() => {
    fetchBlog(key);
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
export default BlogDetailPage;
