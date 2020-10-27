import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

const BlogDetail = (props) => {
  const { loding, blog } = props;

  if (loding) {
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
