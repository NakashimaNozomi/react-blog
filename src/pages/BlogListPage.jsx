import React, { useEffect, useState, useMemo } from 'react';
import { useBlogOperations } from '../modules/blogs/operations';
import { useBlogSelectors } from '../modules/blogs/selectors';

import { BlogList } from '../components/BlogList';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const BlogListPage = () => {
  const { fetchBlogList } = useBlogOperations();
  const { blogList } = useBlogSelectors();
  const params = new URLSearchParams(window.location.search);
  const pageParam = Number(params.get('page'));

  const [page, changePage] = useState(pageParam || 1);
  const [limit, changeLimit] = useState(3);
  let offset = useMemo(() => {
    let _o = 0;
    if (page != 1) {
      _o = Math.ceil((page - 1) * limit);
    }
    return _o;
  }, [page]);

  useEffect(() => {
    fetchBlogList({ limit: limit, offset: offset });
  }, [page]);

  const handlePageChange = (event, value) => {
    if (page === value) return;
    changePage(value);
    params.set('page', value);
    window.history.replaceState('', '', '?' + params.toString());
  };

  return (
    <>
      <Typography variant="h4" component="h1">
        ブログ
      </Typography>
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
