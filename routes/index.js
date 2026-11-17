var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  var projects = [
    {
      name: 'Portfolio Website',
      description: 'The site you are looking at. A small Express app that renders each page with EJS templates and shares one header and footer across all of them.',
      tech: ['Node.js', 'Express', 'EJS', 'Bootstrap'],
      github: 'https://github.com/luvduh/Portfolio-Ejs',
      demo: '/'
    },
  ];

  res.render('projects', { title: 'Projects', projects: projects });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', sentName: '' });
});

router.post('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', sentName: req.body.name || 'friend' });
});

module.exports = router;