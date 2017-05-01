const express = require('express');
const ArticleRoutes = require('./articles')

/* GET test route. */
module.exports = (app) => {
  app.post('/api/articles', ArticleRoutes.create);
  app.get('/api/articles', ArticleRoutes.all);
};
