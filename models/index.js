const Blogger = require('./blogger');
const Blog = require('./blog');
const Comment = require('./comment');

Blog.belongsTo(Blogger, {
  foreignKey,
});

module.exports = {
  Blogger,
  Blog,
  Comment,
};
