const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.post('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id

    const query = `INSERT INTO "user" ("first_name", "last_name", "address", "phone", "email")
    VALUES ($1, $2, $3, $4, $5)
    WHERE "id" = $6;`;
    const values = [req.body.first_name, req.body.last_name, req.body.address, req.body.phone, req.body.email, id]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('ERROR ADDING HOUSE DETAILS', err);
            res.sendStatus(500)
        })

});

module.exports = router;