const express = require('express');

const router = express.Router();


//middleware to validate the route inputs
router.post('/:operator', (req, res, next) => {
  if(!req.body.num1  && !req.body.num2) {
    return res.status(432).json({message: "No data fool"});
  }

  next();  //needed to move to the next test (routes for the calculator...below)
})

  //routes for the calculator
  router.post('/add', (req, res, next) => {
  res.json({result: req.body.num1 + req.body.num2});
});

module.exports = router;
