const express = require('express');

const Router = express.Router();

const {formatData} = require('../utils')
const {insert,find} = require('../db/mongo');
const {mysql:query} = require('../db');

// Router.post('/',async (req,res)=>{
//     // async & await 实现：用同步的代码实现异步操作
//     // async * await 是ES7的知识
//     let data = await insert('user',req.body);

//     res.send(formatData())
// })

// // 验证用户名是否存在
// Router.get('/check',async (req,res)=>{
//     // async & await 实现：用同步的代码实现异步操作
//     // async * await 是ES7的知识
//     let {username} = req.query;
//     let data = await find('user',{username});
//     console.log(data)
//     if(data.length>0){
//         return res.send(formatData({code:250}))
//     }
//     res.send(formatData())
// })



Router.route('/')
.put((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    // let {id} = req.params;
    // console.log('params:',req.params)
    let {username,pwd} = req.body.user;
    console.log(username,pwd)
    let sql=`select * from user where username='${username}' and pwd='${pwd}'`;
    // let sql=`insert into user values ('${username}', '${pwd}')`;
    query(sql).then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})

.post((req,res)=>{
    console.log('params:',req.body);//{name,price,category,imgurl,...}
    // res.send(formatData({data:req.body}))
    // console.log('params:',req.body.user);
    let {username,pwd} = req.body.user;
    console.log(username,pwd)
    // let sql = `insert into goods(${names}) values(${values})`;
    let sql=`insert into user values ('${username}', '${pwd}')`;
    console.log(sql);

    query(sql).then(data=>{
        res.send(formatData({data}))
    }).catch(err=>{
        res.send(formatData({
            data:err,
            code:250
        }))
    })

    
})

// 获取所有商品
.get((req,res)=>{
    // 读取数据库，并返回数据
    // 连接数据库
    // connection.connect();
    // // 查询数据库
    // connection.query('select * from goods', function (error, data, fields) {
    //     if (error) throw error;
    //    // 关闭连接,释放资源
    //     connection.end();
    //     console.log(data)
    //     res.send(formatData({data}))
    // });

    // pool.query('select * from goods', function(error, data){
    //     res.send(formatData({data}))
    // });

    // res.send(JSON.stringify(req));


    query('select * from cart').then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})



module.exports = Router;