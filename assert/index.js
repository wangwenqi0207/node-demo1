const assert = require('assert'); //断点

//assert(条件，消息)


//条件匹配就执行 条件不匹配就打印aaa
assert(5<3,"aaa");


//deepEqual深度比较

//assert.deepEqual(要比较的变量，预期值,不相等打印的值) 相当于双等号
//assert.deepStrictEqual(要比较的变量，预期值,不相等打印的值) 相当于三等号

// assert.deepEqual()