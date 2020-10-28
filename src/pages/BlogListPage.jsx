import React, { useEffect, useState } from 'react';
import { useBlogOperations } from '../modules/blogs/operations';
import { useBlogSelectors } from '../modules/blogs/selectors';

import { Heading } from '../components/Heading';
import { BlogList } from '../components/BlogList';
import { Pagination } from '@material-ui/lab';

const BlogListPage = () => {
  const { fetchBlogList } = useBlogOperations();
  const { blogList } = useBlogSelectors();
  const params = new URLSearchParams(window.location.search);
  const pageParam = Number(params.get('page'));

  const [page, changePage] = useState(pageParam || 1);
  const [limit, changeLimit] = useState(2);
  const [offset, changeOffset] = useState(0);

  useEffect(() => {
    updateOffsetIFNeed();
    fetchBlogList({ limit: limit, offset: offset });
  }, []);

  const handlePageChange = (event, value) => {
    if (page === value) return;
    params.set('page', value);
    window.history.replaceState('', '', '?' + params.toString());
    changePage(value);

    updateOffsetIFNeed();
    fetchBlogList({ limit: limit, offset: offset });
  };

  const updateOffsetIFNeed = () => {
    if (page != 1) {
      changeOffset(Math.ceil((page - 1) * limit));
    } else if (offset != 0) {
      changeOffset(0);
    }
  };

  return (
    <>
      <Heading>最新ブログ</Heading>
      <BlogList />
      <Pagination
        page={page}
        count={Math.ceil(blogList.totalCount / limit)}
        onChange={handlePageChange}
      />
    </>
  );
};
export default BlogListPage;
