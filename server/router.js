module.exports = function(app){
	app.get('/',function(req,res,next){
		res.send(['iphone','ps4','xbox one']);
	});
}