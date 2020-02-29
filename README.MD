安装node.js 
node 命令可运行js文件
例如 新建index.js文件 用node运行 命令行：node index.js


模块规范是构建大型node项目的基础
npm是node的包管理工具
包是别人写的nodejs模块
将某包删除 npm uninstall


express是node的框架
npm i express


[Node.js Buffer(缓冲区)]
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

nodejs的模块 require的时候 如果带有路径 去路径下面找
如果没有路径 会去node_modules文件夹下面找
如果还没有 会去系统node_modules下找

module用于批量导出


cnpm i mysql -D  项目中安装mysql
cnpm i co-mysql -D  可异步调用mysql 避免回调地狱


下载phpstudy 安装  启动 打开phpMyAdmin  用户名密码都是root  可改 
http://localhost/phpMyAdmin
可新建数据库 编码可选择默认：utf8_general_ci
用户名、字段数=》点击执行 
主键：PRIMARY  内容不可重复：UNIQUE（例如用户名）
数据库类型：数字、文本
数字：INT   文本：VARCHAR（短）TEXT（长）

增：INSERT INTO <表> 字段 "值"
删：DELETE FROM 表名 WHERE ID=2
改：UPDATE 表名 SET password='654321'
查：SELECT 字段列表 FROM 表 WHERE 条件


读写流常见场景：
压缩 加密

koa目前在node框架中比较流行

