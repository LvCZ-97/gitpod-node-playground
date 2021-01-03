const polyfillLibrary = require('polyfill-library');

// const polyfillBundle = polyfillLibrary.getPolyfillString({
//     uaString: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko',
//     minify: true,
//     features: {
// 		'es6': { flags: ['gated'] }
// 	}
// }).then(function(bundleString) {
//     console.log(bundleString);
// });

const polyfillBundle = polyfillLibrary.listAllPolyfills().then(res => {
    console.log(res);
});