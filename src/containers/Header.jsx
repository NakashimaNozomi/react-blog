import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h2>blog head</h2>
      <p>
        <Link to="/">最新ブログ</Link> |{' '}
        <Link to="/category">カテゴリ一覧</Link> |{' '}
        <Link to="/tag">タグ一覧</Link> | <Link to="/contact">お問合せ</Link>
      </p>
      <hr />
    </>
  );
};
export default Header;
