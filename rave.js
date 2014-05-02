/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var i18n = require('curl/plugin/i18n');

exports.create = create;

function create (context) {
	var info = {
		name: 'curl/plugin/i18n',
		module: i18n
	};
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap['i18n']
		= context.amdPluginMap['curl/plugin/i18n']
		= info;
}
