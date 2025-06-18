import mysql2 from 'mysql2/promise'

const connection = mysql2.createPool({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'',
    database:'vitokoscoffee',
})

export default connection;
