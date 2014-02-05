// {{#nl2br}} replace returns with <br>
Handlebars.registerHelper('nl2br', function(options) {
	var nl2br = (options.fn(this) + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
		return new Handlebars.SafeString(nl2br);
});
	 
/**
* {{#ifGt}} greater than helper
*
* @param1 int param1
* @param1 int param2
* @return boolean
*/
Handlebars.registerHelper('ifGt', function(param1, param2, options) {
	if( param1 > param2 ) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});
	 
/**
* {{#replace}} replace specified content
*
* @param string find
* @param string replace
* @return string
*/
Handlebars.registerHelper('replace', function( find, replace, options) {
	var string = options.fn(this);
	return string.replace( find, replace );
});