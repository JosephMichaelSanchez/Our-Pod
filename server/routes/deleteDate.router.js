const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.delete('/:date', rejectUnauthenticated, (req, res) => {
    
    const query = `DELETE FROM hosting WHERE "id" = $1;`;
    const values = [req.params.date]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)   
            
                    
        })
        .catch(err => {
            console.log('ERROR DELETING DATE IN ROUTER', err);
            res.sendStatus(500)
        })

});

module.exports = router;