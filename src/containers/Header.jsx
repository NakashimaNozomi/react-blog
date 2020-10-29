import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const Header = () => {
  return (
    <header>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar id="back-to-top-anchor">
          <Typography variant="h6" component="h2">
            React Blog
          </Typography>
        </Toolbar>
        {/* <p>
          <Link to="/">最新ブログ</Link> |{' '}
          <Link to="/category">カテゴリ一覧</Link> |{' '}
          <Link to="/tag">タグ一覧</Link> | <Link to="/contact">お問合せ</Link>
        </p> */}
      </AppBar>
    </header>
  );
};
export default Header;
