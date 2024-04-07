"use strict";
const express = require("express");
const dbConnection = require("./helper/postgresql");

const app = express();


app.get(
  '/', (req, res) => res.status(200).send('hello')
);

app.get('/students', async (req, res) => {
  const result = await dbConnection.query('SELECT * FROM students');
  res.json(result.rows);
});

app.get('/students/:name', async (req, res) => {
  const { name } = req.params;
  const result = await dbConnection.query('SELECT * FROM students WHERE name = $1', [name]);
  res.json(result.rows);
});

app.get('/students/add/:name', async (req, res) => {
  const { name } = req.params;
  await dbConnection.query('INSERT INTO students (name) VALUES($1)', [name]);
  res.send(`${name} eklendi`);
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


