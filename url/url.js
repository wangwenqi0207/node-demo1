const url = require('url');

let str = 'http://www.bing.com:8080/a/b/1.html?a=12&b=5';

console.log(url.parse(str,true));

// protocol: 'http:',
// slashes: true,
// auth: null,
// host: 'www.bing.com:8080',
// port: '8080',
// hostname: 'www.bing.com',
// hash: null,
// search: '?a=12&b=5',
// query: { a: '12', b: '5' },
// pathname: '/a/b/1.html',
// path: '/a/b/1.html?a=12&b=5',
// href: 'http://www.bing.com:8080/a/b/1.html?a=12&b=5'