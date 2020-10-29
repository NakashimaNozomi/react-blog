import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import history from './modules/history';

import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import ContactPage from './pages/ContactPage';
import { Container } from '@material-ui/core';

const App = (props) => {
  return (
    <Router history={history}>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/:page([0-9]+)?">
            <BlogListPage />
          </Route>
          <Route exact path="/blog/:key">
            <BlogDetailPage />
          </Route>

          <Route exact path="/category">
            <CategoryPage />
          </Route>
          <Route exact path="/tag">
            <TagPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Container>
      <Footer {...props} />
    </Router>
  );
};

export default App;
