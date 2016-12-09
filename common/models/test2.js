module.exports = function(test2, options) {
	
	test2.observe('access', function ACLLimit(ctx, next) {
  
    console.log("%s where: %j", test2.definition.name, ctx.query.where);
		next();
		
	});
	
};
