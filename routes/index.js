var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Marks Lab 4',
    message: 'My lab' });
});

// GET mark page
router.get('/mark', function(req, res, next) {
  res.render('mark', {
    title: 'Mark',
    message: 'Mark is a second year programming student at Georgian College. He enjoys mainframes and is very intrigued with cyber security. He\'s in year two of COPR but wants to switch to COPA. Outside programming he enjoys reading, running, cycling and generally being outdoors when he can.' });
});

// GET melvin page
router.get('/melvin', function(req, res, next) {
  res.render('melvin', {
    title: 'Melvin',
    message: 'Melvin is a retired Salvation Army officer. For most of his career he was a bookkeeper and business manager. Today he enjoys reading and performing bookkeeping and tax services.'
  });
});

// GET shirley page
router.get('/shirley', function(req, res, next) {
  res.render('shirley', {
    title: 'Shirley',
    message: 'Shirley is a retired Salvation Army officer. She was responsible for overseeing special services for seniors, and later was the Director of Special Services for the SA training college. Today she enjoys crafting all manner of decorative items, as well as baking new things.'
  });
});

// GET jackie page
router.get('/jackie', function(req, res, next) {
  res.render('jackie', {
    title: 'Jackie',
    message: 'Jackie is a stay-at-home-mom in Winnipeg and is engaged to a mid level manager at the horse track. She has one son, one dog, and one cat. A few years ago she finished a diploma in hospital office management, but has taken this time to raise her son. Now that he has started school, who knows what Jackie will do?'
  });
});

// GET lisa page
router.get('/lisa', function(req, res, next) {
  res.render('lisa', {
    title: 'Lisa',
    message: 'Lisa works for the Deputy Minister of Health Canada, handling federal budgets. She is married to a staff sergeant with the Ottawa Police Service. She is arguably the most sucessful member of the family, and has certainly put in the work to get to where she is today. She has two grown children, one is also studying programming like his uncle, and the other is moving to Quebec with her boyfriend who serves in the Canadian Armed Forces.'
  });
});

/* GET all other pages */
router.get('/*', function(req, res, next) {
  res.render('404', {
    title: 'Four-oh-four',
    header: 'You shall not pass',
    message: 'You\'ve stumbled into the balrog\'s lair. Please use the nav menu at the top.' });
});

module.exports = router;
