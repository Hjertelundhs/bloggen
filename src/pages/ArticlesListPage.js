import React from 'react';

import ArticleList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticleList articles={articleContent}/>
    </>
)

export default ArticlesListPage;