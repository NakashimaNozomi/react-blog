import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';

import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <BlogPage />
        </Route>
        <Route exact path="/blog/:key">
          <BlogPage />
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
      <Footer />
    </HashRouter>
  );
};

export default App;
