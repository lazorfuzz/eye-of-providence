const express = require('express');
const util = require('./util');

const router = express.Router();

router.use((req, res, next) => {
  // console.log(req);
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

router.route('/cams')
  .get((req, res) => {
    res.json(util.getCams());
  });

module.exports = router;
