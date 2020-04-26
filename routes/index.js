var express = require('express');
var router = express.Router();

const testUser = {
  name: 'Ue',
  idName: 'au',
  seqUserId: 123123
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '天気の子を発見',
    user: testUser,
    cartItemList
  });
});

module.exports = router;
