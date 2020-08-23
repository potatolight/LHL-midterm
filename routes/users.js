/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
// const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const express = require('express');
const router  = express.Router();

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));


//we do not need login , do we need to compare the username and password?
router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

router.get('/logout', (req,res) => {
  req.session.user_id = null;
  res.send({})
})

module.exports = router;
