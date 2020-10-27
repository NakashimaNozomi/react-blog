import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

const BlogList = (props) => {
  const { loding, blogList } = props;

  if (loding) {
    return <p>loading...</p>;
  }
  return (
    <>
      <Heading>最新ブログ</Heading>
      <ul>
        {blogList?.map((blog, i) => (
          <li key={blog.id}>
            <h2>
              <Link to={'/blog/' + blog.id}>{blog.title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default BlogList;
