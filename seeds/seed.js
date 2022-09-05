require('dotenv').config();

const mysql = require('mysql2');
const seedBlogData = require('./blogData');
const seedBloggerData = require('./bloggerData');
const seedCommentData = require('./commentData');
const sequelize = require('../config/connection');
const {
  _DB_USER,
  _DB_PASSWORD,
  _DB_PORT,
  _DB_HOST,
  _DB_NAME,
} = require('../config/config');
const con = mysql.createConnection({
  host: _DB_HOST,
  user: _DB_USER,
  password: _DB_PASSWORD,
  port: _DB_PORT,
});
const databaseName = _DB_NAME;
con1.connect((err) => {
  if (err) throw err;
  con1.query(`DROP DATABASE IF EXISTS ${databaseName}`, (err2) => {
    if (err2) throw err2;
  });
  con1.end();
  console.log('DROPPED DATABASE');
});

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlogData();
  console.log('\n----- BLOG SEEDED -----\n');
  await seedBloggerData();
  console.log('\n----- BLOGGER SEEDED -----\n');
  await seedCommentData();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
