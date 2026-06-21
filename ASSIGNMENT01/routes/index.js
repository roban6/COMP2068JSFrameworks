var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    pageTitle: 'Robanpreet Singh Portfolio'
  });
});

/* About Me page */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About Me',
    pageTitle: 'About Me'
  });
});

/* Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'Projects',
    pageTitle: 'Projects'
  });
});

/* Contact Me page */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Me',
    pageTitle: 'Contact Me'
  });
});

module.exports = router;