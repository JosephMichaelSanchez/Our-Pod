const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/:date', rejectUnauthenticated, (req, res) => {
    const host = req.user.last_name;
    
    const query = `UPDATE "hosting" SET "host" = $1
                    WHERE "id" = $2`;
    const values = [host, req.params.date]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)           
        })
        .catch(err => {
            console.log('ERROR ADDING HOST DATE IN ROUTER', err);
            res.sendStatus(500)
        })

});

module.exports = router;