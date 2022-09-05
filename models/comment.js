const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_message: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    blogger_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'blogger',
        key: 'id',
      },
    },
    blog_id: {
      type: Datatypes.STRING,
      references: {
        model: 'blog',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
