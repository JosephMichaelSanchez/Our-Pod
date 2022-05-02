const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/', rejectUnauthenticated, (req, res) => {
    
    const query = `SELECT "user".id, "user".first_name, "user".last_name, "user".address, "user".phone, "user".email FROM "user"
    WHERE "pod_id" = $1
    ORDER BY "id" ASC;`;
    const values = [req.user.pod_id]
    pool.query(query, values)
      .then( result => {
        res.send(result.rows);
        
        
      })
      .catch(err => {
        console.log('ERROR GETTING USER POD', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;