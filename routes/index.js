const express = require('express');
const ArticleRoutes = require('./articles')

/* GET test route. */
module.exports = (app) => {
  app.post('/api/articles', ArticleRoutes.createOne);
  app.get('/api/articles', ArticleRoutes.getAll);
  app.get('/api/articles/:article_id', ArticleRoutes.getOne);
  app.delete('/api/articles/:article_id', ArticleRoutes.removeOne);
  app.put('/api/articles/:article_id', ArticleRoutes.editOne);
};
