const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.post('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;

    let firstName = null;
    let lastName = null;
    let address = null;
    let phone = null;
    let email = null;

    if (req.body.first_name.length < 1) {
        firstName = req.user.first_name
    } else {
        firstName = req.body.first_name
    }

    if (req.body.last_name.length < 1) {
        lastName = req.user.last_name
    } else {
        lastName = req.body.last_name
    }

    if (req.body.address.length < 1) {
        address = req.user.address
    } else {
        address = req.body.address
    }
    if (req.body.phone.length < 1) {
        phone = req.user.phone
    } else {
        phone = req.body.phone
    }

    if (req.body.email.length < 1) {
        email = req.user.email
    } else {
        email = req.body.email
    }


    const query = `UPDATE "user" SET "first_name" = $1, "last_name" = $2, "address" = $3, "phone" = $4, "email" = $5
    WHERE "id" = $6;`;
    const values = [firstName, lastName, address, phone, email, id]
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