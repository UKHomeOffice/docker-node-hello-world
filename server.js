const express = require('express')
const mysql = require('mysql')
const port = 4000
const app = express()

app.listen(port)

console.log('Server running at http://localhost:' + port)

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send(`Hello world\nSECRET: ${process.env.MYSUPERSECRET}`)
  return res.end();
})

app.get('/table', (req, res) => {
  var connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  })
  var response = '<html><body>'
  connection.connect()
  connection.query("CREATE TABLE IF NOT EXISTS mydates (date DATETIME DEFAULT CURRENT_TIMESTAMP)", () =>
    connection.query("INSERT INTO mydates VALUES()", () =>
      connection.query("SELECT * FROM mydates ORDER BY DATE DESC;")
        .on('error', err => response += 'ERROR')
        .on('fields', () => response += '<table><th><td>dates</td></th>')
        .on('result', row => response += `<tr><td>${row.date}</td></tr>`)
        .on('end', () => res.send(`${response}</body></html>`))
    )
  )
})