const querystring = require('querystring')

querystring.parse('a=12&b=5&c=99')

console.log(querystring.parse('a=12&b=5&c=99'))  //{ a: '12', b: '5', c: '99' }
console.log(querystring.stringify({a: '12', b: '5', c: 'winter'})) //a=12&b=5&c=winter


