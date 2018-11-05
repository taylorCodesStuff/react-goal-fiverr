const express = require('express');

const { User } = require('../models/user');
const { checkJwt } = require('../middlewares/auth');
const Subscriber = require('../utils/Subscriber');

const router = express.Router();

router.post('/update', checkJwt, async function(req, res){

    const user = {
        user_id: req.user.sub,
        email: req.body.email
    }
      
    try {
        const user_db = await User.findOneAndUpdate(
          {user_id: user.user_id },
          user,
          {upsert: true},
          function(err){
            if (err){
              console.log(err);
            }
          }
        );
        res.status(200).json(user_db);
    }
    catch(e)
    {
      console.error(e);
      res.status(500).json('Internal server error.');
    }

})

router.put('/', checkJwt, async function(req, res){
  console.log('USER BODY', req.body);
  console.log('USER ', req.user);
  
  

  try {
    const user_wallet = await User.findOne({user_id: req.user.sub}, function(err, user){
      console.log('USER SAVE ', user);
      // req.body.add ? user.wallet += req.body.wallet : user.wallet -= req.body.wallet
      // user.wallet -= req.body.wallet;
      req.body.equation === 'minus' ? user.wallet -= req.body.wallet : user.wallet += 5
       user.save(function(err){
          if(err){
              console.error(err);
          } else {
            res.status(200).json(user);
          }
       });
       if(err) console.error(err);

      }
    );
  } catch(e) {
    console.error(e);
    res.status(500).json('An Error Occurred trying to update wallet amt');
  }

});

module.exports = router;
