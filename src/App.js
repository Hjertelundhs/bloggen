import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar'

import './App.css';
import ArticlesListPage from './pages/ArticlesListPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div id="page-body">
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article/:name" component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
