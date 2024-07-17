const express = import('express');
const mysql = import('mysql');
 
const app = express()
const port = 3001

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'toor',
    database: 'blog',
})

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('conexion exitosa')
})

app.get('/api/blog', (req, res) =>{
    const sql_query = 'SELECT * FROM ideas'
    db.query(sql_query, (err, result) =>{
        if(err){
            throw err;
        }
        res.json(result);
    });
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
})