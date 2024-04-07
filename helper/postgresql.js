const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres_db',
  host: 'postgres_db',
  database: 'db',
  password: '123',
  port: 5432,
});

pool.connect((err) => {
  if (err) throw err;
  console.log('Connected');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
