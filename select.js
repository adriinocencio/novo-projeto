const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) throw err;

  const sql = 'SELECT name, address FROM customers LIMIT 10';
  connection.query(sql, (err, results) => {
    if (err) throw err;

    console.log('Os primeiros 10 registros são:');
    results.forEach((row) => {
      console.log(`Name: ${row.name}, Address: ${row.address}`);
    });

    connection.end();
  });
});
