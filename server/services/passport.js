const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//set options for local strategy
const localOptions = {usernameField:'email'};
const localLogin = new LocalStrategy(localOptions,function(email,password,done){
	//verify the email and the password
	//if it is the correct email and password,call done with the user
	//otherwise, call done with false
	User.findOne({email:email},function(err,user){
		if(err){return done(err);}
		if(!user){return done(null,false);}
		
		//check if the password matches 
		user.comparePassword(password,function(err,isMatch){
			if(err){return done(err);}
			
			if(!isMatch){return done(null,false);}
			
			return done(null,user);
		});
	})
});

//set options for JWT strategy
const JwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
}

//create JWT strategy
const JwtLogin = new JwtStrategy(JwtOptions,function(payload,done){
	//check if the user id in the payload exists in the db
	//if it does, call 'done' with that user
	//otherwise, call done without a user object
	User.findById(payload.sub,function(err,user){
		if(err){return done(err,false);}
		if(user)
		{
			return done(null,user);
		}
		else
		{
			return done(null,false);
		}
	});
});

//Tell passport to use JWT strategy
passport.use(JwtLogin);
passport.use(localLogin);