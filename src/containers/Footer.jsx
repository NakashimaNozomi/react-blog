import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <h2>blog end</h2>
        <p>
          <Link to="/">最新</Link> | <Link to="/category">カテゴリ一覧</Link> |{' '}
          <Link to="/tag">タグ一覧</Link> | <Link to="/contact">お問合せ</Link>
        </p>
      </footer>
    </>
  );
};
export default Footer;
