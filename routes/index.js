var express = require('express');
var router = express.Router();

var idpFacebook = require('idp-facebook')
({ clientID: '238832849634709', 
clientSecret: '5c46f60822d2cfdf42192730c52ff863', 
'redirectUri': 'http://democs612.azurewebsites.net/' });

// Get the auth URL to redirect the user for OAuth2 login
idpFacebook.authUrl({ state: 'session_id' });



/* GET home page. */
router.get('/', function (req, res, next) {
idpFacebook(code, function (err, identity) {
  if (err) {
    console.error('explode');
  }
  else {
    do_amazing_things_with(identity.id, identity.name, identity.url, identity.accessToken);
  }
});
//  res.render('index', { title: 'Million Dollar Webstie' });
});

router.post('/', function (req, res, next) {

  res.setHeader("FOOBAR", "nothing")
  res.send({ type: "post", message: "this was a post" })
})

module.exports = router;






// Using the code provided in the query string upon return to your web app, get the identity:
