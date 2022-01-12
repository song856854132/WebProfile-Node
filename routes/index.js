var express = require('express');
var router = express.Router();
var path = require('path')
// const homeRouter = path.join(__dirname, '../public')
// const profileRouter = require('../public/profile')
// router.use(express.static(path.join(__dirname, '../public')));
// console.log(homeRouter)
// console.log(__dirname)
// router.use('/', express.static(path.join(__dirname, '..', 'public', 'home')));
// router.use('/profile', express.static(path.join(__dirname, '..', 'public', 'profile')));
/* GET home page. */
router.get('/', function(req, res) {
  //res.redirect('../public/home/index.html')
  
  //var fileName = req.params.name
  // var options = {
  //   root: path.join(__dirname,'..','public','home'),
  //   dotfiles: 'deny',
  //   header: {
  //     'x-timestamp': Date.now(),
  //     'x-sent': true
  //   }
  // }
  // __dirname = Express/routes
  res.sendFile(path.join(__dirname,'..','public','home','index.html'), function(err){
    if(err){
      next(err)
    }
    else{
      console.log('Sent: index.html')
    }
  })

  // console.log(homeRouter+'index.html')
  // res.sendFile(path.join(__dirname,'..','public','home','index.html'))

});
router.get('/profile', function(req, res) {
  res.sendFile(path.join(__dirname,'..','public','profile','profile.html'))
});
module.exports = router;
