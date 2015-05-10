//连接mongodb：mongod --config f:\Mongo\mongo.config

//查看mongodb里的信息mongodb\bin>mongo
//use blog
//db.users.find() 查看
//db.users.remove({}) 删除注册账号数据
//db.posts.remove({}) 删除文章数据
var settings = require('../settings'),
	Db = require('mongodb').Db,
	Connection = require('mongodb').Connection,
	Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {
	safe: true   //设置数据库名、数据库地址和数据库端口创建了一个数据库连接实例，
});              //并通过 module.exports 导出该实例。这样，我们就可以通过 require 这个文件来对数据库进行读写了

/*MongoDB 是一个基于分布式文件存储的 NoSQL（非关系型数据库）的一种，由 C++ 语言编写，
旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。MongoDB 支持的数据结构非常松散，
是类似 json 的 bjson 格式，因此可以存储比较复杂的数据类型。MongoDB 最大的特点是他支持的查询语言非常强大，
其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，
而且还支持对数据建立索引。

MongoDB 没有关系型数据库中行和表的概念，不过有类似的文档和集合的概念。
文档是 MongoDB 最基本的单位，每个文档都会以唯一的 _id 标识，文档的属性为 key/value 的键值对形式，
文档内可以嵌套另一个文档，因此可以存储比较复杂的数据类型。集合是许多文档的总和，一个数据库可以有多个集合，
一个集合可以有多个文档。*/
