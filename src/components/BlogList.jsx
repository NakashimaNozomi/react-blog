import React from 'react';
import { useBlogSelectors } from '../modules/blogs/selectors';

import { Link } from 'react-router-dom';
import { removeHtmlTags } from '../utils/index';

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
          <p>{removeHtmlTags(blog?.content).substring(0, 100)}...</p>
        </li>
      ))}
    </ul>
  );
};
