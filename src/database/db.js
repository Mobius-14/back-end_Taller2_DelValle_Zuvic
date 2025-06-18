import mysql2 from 'mysql2/promise'


const connection = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'vitokoscoffee',
})

export default connection;