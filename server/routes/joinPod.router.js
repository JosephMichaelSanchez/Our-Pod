const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.user.id
    
    const query = `UPDATE "user" SET "pod_id" = $1
                   WHERE "id" = $2;`;
    const values = [Number(req.params.id), id]
    pool.query(query, values)
      .then( result => {
        res.sendStatus(201)
        
      })
      .catch(err => {
        console.log('ERROR JOINING POD', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;