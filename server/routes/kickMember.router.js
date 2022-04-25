const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.put('/', rejectUnauthenticated, (req, res) => {
    
    const query = `UPDATE "user" SET "pod_id"=NULL
    WHERE "first_name" = $1 AND "email" = $2;`;
    const values = [req.body.first_name, req.body.email]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('ERROR KICKING FROM POD', err);
            res.sendStatus(500)
        })

});

module.exports = router;