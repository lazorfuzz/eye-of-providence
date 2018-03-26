const express = require('express');
const Database = require('nedb');
const resolve = require('path').resolve;
const util = require('./util');

const router = express.Router();
const db = new Database({ filename: resolve(process.cwd(), 'eye.db'), autoload: true, timestampData: true });

db.find({ type: 'Cam' }, (err, docs) => {
  if (docs.length === 0) {
    util.getCams().map((cam) => {
      return db.insert({ type: 'Cam', url: cam });
    });
  }
});

router.use((req, res, next) => {
  // console.log(req);
  next();
});

router.get('/', (req, res) => {
  res.send('Eye of Providence API!');
});

router.route('/cams')
  .get((req, res) => {
    db.find({ type: 'Cam' }, (err, docs) => res.json(docs));
  })
  .post((req, res) => {
    if (!req.body.url) {
      res.json({ status: false });
      return;
    }
    db.update({ type: 'Cam', url: req.body.url }, { type: 'Cam', url: req.body.url }, { upsert: true }, (err, numAffected, affDocs) => {
      res.json(affDocs);
    });
  });

router.route('/cams/:_id')
  .get((req, res) => {
    db.find({ type: 'Cam', _id: req.params._id }, (err, docs) => { // eslint-disable-line
      res.json(docs);
    });
  })
  .delete((req, res) => {
    db.remove({ type: 'Cam', _id: req.params._id }); // eslint-disable-line
    res.json({ status: true });
  });

module.exports = router;
