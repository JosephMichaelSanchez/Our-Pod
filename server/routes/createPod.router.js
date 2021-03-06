const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.post('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;

    const query = `INSERT INTO pods ("pod_name", "key_code", "admin_id")
    VALUES ($1, $2, $3);`;
    const values = [req.body.pod_name, req.body.key_code, id]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('ERROR CREATING NEW POD', err);
            res.sendStatus(500)
        })

});

module.exports = router;