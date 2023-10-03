const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to MySQL database.');

  const recordsToInsert = [];
  for (let i = 1; i <= 20; i++) {
    recordsToInsert.push([`Customer ${i}`, `Address ${i}`]);
  }

  const sql = 'INSERT INTO customers (name, address) VALUES ?';
  connection.query(sql, [recordsToInsert], (err, result) => {
    if (err) throw err;

    console.log(`${result.affectedRows} records inserted.`);
    connection.end();
  });
});
