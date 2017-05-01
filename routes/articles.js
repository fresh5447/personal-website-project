const Article = require('../models/article');

exports.all = (req, res) => {
  console.log('about to find all article')
  Article.find((err, data) => {
    if (err) return res.send(err, "Error finding all Articles");
    res.json({ message: "Found Articles", data });
  });
};


exports.create = (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save((err, data) => {
    if (err) return res.send(err, "Error creating a new database");
    res.json({message: "Article Created", data})
  })
}
