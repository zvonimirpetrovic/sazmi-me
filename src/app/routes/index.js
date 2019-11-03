const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.send({title: 'Sazmi me'})
});

module.exports = router;
