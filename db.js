const Pool = require('pg').Pool

const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'postgres'
})
module.exports = pool

// const {Client} = require("pg")
//
// const client = new Client ({
//     host:'localhost',
//     user: 'postgres',
//     port: 5432,
//     password: 'root',
//     database: 'postgres',
// })
// client.connect()
//
// client.query(`Select * from person`, (err,res)=>{
//     if  (!err) {
//         console.log(res.rows)
//     } else {
//         console.log(err.message)
//     }
//     client.end()
// })
