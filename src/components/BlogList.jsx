import React from 'react';
import { useBlogSelectors } from '../modules/blogs/selectors';

import { Link } from 'react-router-dom';

export const BlogList = () => {
  const { blogList, isFetchBlogList } = useBlogSelectors();

  if (isFetchBlogList) {
    return <p>loading...</p>;
  }

  return (
    <ul>
      {blogList.contents?.map((blog, i) => (
        <li key={blog.id}>
          <h2>
            <Link to={'/blog/' + blog.id}>{blog.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </li>
      ))}
    </ul>
  );
};
