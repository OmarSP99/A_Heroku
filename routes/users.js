var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/adopted', function(req, res){
    res.send({message:'You just adopted a cat'});
})

module.exports = router;
