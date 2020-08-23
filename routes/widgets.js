/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const {getAllPokemons, addPokeman} = require('../lib/test');//this function need to getinto from matt part consider again??


router.get('/', (req, res) => {
  getAllPokemons()
    .then((pokemans) => {
      res.render("widget", {pokemans})
    })    
    .catch(e => {
      console.error(e);
      res.send(e)
    }); 
});

router.post('/creat_listing', (req, res) => {
    const userId = req.session.userId;
    addPokeman({...req.body, user_id: userId})
      .then(pokeman => {
        console.log(pokeman)
        res.send(pokeman);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
  });
})

router.post("/:id/delete", (req, res) => {
  const userId = req.session.user_id;
  
})



//homepage can get all list ????
// router.get("/", (req,res) => {
//   getAllPokemons(option)
//     .then((pokemons)=>{
//       console.log(pokemons)
//        res.json({pokemons})
//     })
//     .catch(err => {
//       res.json({ error: err.message })
//     })
// });


//the login user can see their own selling list
// router.get('/', (req, res) => {
//   const userId = req.session.user_id
//   if(!userId) {
//     res.error('Please login first');
//     return
//   }
//   getAllUserList(userId)
//     .then(userList => res.send({userList}))
//     .catch(err => {
//       res.json({ error: err.message })
//     })
// })



module.exports = router;
