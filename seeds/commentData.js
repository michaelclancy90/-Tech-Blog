const { Comment } = require('../models');

const blogData = [
  {
    comment_message: 'Abc',
    blogger_id: '1',
    blog_id: '1',
  },
  {
    comment_message: 'Def',
    blogger_id: '2',
    blog_id: '2',
  },
  {
    comment_message: 'Ghi',
    blogger_id: '3',
    blog_id: '3',
  },
];
const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
