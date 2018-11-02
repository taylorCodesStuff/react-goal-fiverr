const express = require('express');
const { User } = require('../models/user');
const { checkJwt } = require('../middlewares/auth');
const keys = require('../config');

const stripe = require('stripe')(keys.stripeSecretKey);

const router = express.Router(); 

/*
router.post('/stripe', checkJwt, async (req, res) => {
    console.log(req.body);
    console.log(req.body.id);
    const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: 'Billing for goal credits',
        source: req.body.id
    });

    console.log(charge);

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
});
*/


router.post("/charge", checkJwt, async (req, res) => {
    console.log( ' req.body ',  req.body )
    console.log( ' req.body id',  req.body.token.id )
  
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body.token.id
      });
  
      res.json({status});
      // res.redirect('/');
    } catch (err) {
    console.error(err);
      res.status(500).end();
    }
  });

module.exports = router;
