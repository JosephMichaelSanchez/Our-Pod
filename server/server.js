const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const houseDetailsRouter = require('./routes/houseDetails.router');
const createPodRouter = require('./routes/createPod.router');
const findPodRouter = require('./routes/findPod.router');
const joinPodRouter = require('./routes/joinPod.router');
const myPodRouter = require('./routes/myPod.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/housedetails', houseDetailsRouter);
app.use('/api/createpod', createPodRouter);
app.use('/api/findpod', findPodRouter);
app.use('/api/joinpod', joinPodRouter)
app.use('/api/mypod', myPodRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
