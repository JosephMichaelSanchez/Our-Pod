const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.post('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;

    const query = `UPDATE "user" SET "first_name" = $1, "last_name" = $2, "address" = $3, "phone" = $4, "email" = $5
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