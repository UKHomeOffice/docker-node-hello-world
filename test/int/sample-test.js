const assert = require('assert');
const Db = require('../../db');

describe('My sample test', () => {
  it('should just pass', (done) => {
    var connection = Db({
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DBNAME,
    });

    connection.query('SHOW TABLES', (err, rows) => {
      !!err ? done(err) : done();
    });
  });
});

