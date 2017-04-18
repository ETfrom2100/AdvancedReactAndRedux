const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt',{session:false});//default is cookie based. since we use jwt token, we need to tell it to not use session
const requireSignin = passport.authenticate('local',{session:false});
module.exports = function(app){
	app.get('/',requireAuth,function(req,res){
		res.send({
			message:'Super secret code is ABC123'
		});
	});
	app.post('/signin',requireSignin,Authentication.signin);
	app.post('/signup',Authentication.signup);
}