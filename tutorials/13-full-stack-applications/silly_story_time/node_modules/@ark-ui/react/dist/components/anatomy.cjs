'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const anatomy = require('@zag-js/anatomy');



Object.keys(anatomy).forEach(k => {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: () => anatomy[k]
	});
});
