module.exports = function(test, options) {
	
	test.observe('access', function ACLLimit(ctx, next) {
  
    console.log("%s where: %j", test.definition.name, ctx.query.where);
		next();
		
	});
	
};
