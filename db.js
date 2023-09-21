import mysql from 'mysql'

export const db=mysql.createConnection({
    host:'localhost',
    database:'insurance',
    user:'root',
    password:''
})

