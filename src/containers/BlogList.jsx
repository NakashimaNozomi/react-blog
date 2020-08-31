import React, { useEffect } from 'react';
import { useBlog } from '../modules/blogs';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';

const BlogList = () => {
  const { fetchBlogList, isFetchBlogList, blogList } = useBlog();
  useEffect(() => {
    console.log('fetch list');

    fetchBlogList();
  }, []);

  if (isFetchBlogList) {
    return <p>loading...</p>;
  }
  return (
    <>
      <Heading>最新ブログ</Heading>
      <ul>
        {blogList.map((blog, i) => (
          <li key={blog.id}>
            <h2>
              <Link to={'/' + blog.id}>{blog.title}</Link>
            </h2>
            <p>{`blog.content`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default BlogList;
