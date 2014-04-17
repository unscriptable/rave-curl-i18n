/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var i18n = require('curl/plugin/i18n');

exports.create = create;

function create (context) {
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap.i18n = 'curl/plugin/i18n';
}
