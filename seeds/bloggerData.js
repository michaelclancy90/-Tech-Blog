const { Blogger } = require('../models');

const blogData = [
  {
    username: 'A',
    email: 'a@email.com',
    password: 'Password1',
  },
  {
    username: 'B',
    email: 'b@email.com',
    password: 'Password2',
  },
  {
    username: 'C',
    email: 'c@email.com',
    password: 'Password3',
  },
];
const seedBloggerData = () => Blogger.bulkCreate(bloggerData);

module.exports = seedBloggerData;
