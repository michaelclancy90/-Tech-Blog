const Blogger = require('./blogger');
const Blog = require('./blog');
const Comment = require('./comment');

Blog.belongsTo(Blogger, {
  foreignKey: 'blogger_id',
});

Comment.belongsTo(Blogger, {
  foreignKey: 'blogger_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'Blog_id',
});

Blogger.hasMany(Blog, {
  foreignKey: 'blogger_id',
});

Blogger.hasMany(Comment, {
  foreignKey: 'blogger_id',
});
Blog.hasMany(Comment, {
  foreignKey: 'Blog_id',
});

module.exports = {
  Blogger,
  Blog,
  Comment,
};
