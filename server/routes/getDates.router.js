const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

    const id = req.user.pod_id
    
    const query = `SELECT * FROM hosting WHERE "pod_id" = $1
                    ORDER BY "date" ASC;`;
    const values = [id]
    pool.query(query, values)
        .then(result => {
            res.send(result.rows);
            console.log(result);

        })
        .catch(err => {
            console.log('ERROR GETTING POD DATES', err);
            res.sendStatus(500)
        })

});

module.exports = router;