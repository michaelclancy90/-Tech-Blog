const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogger_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blogger',
        key: 'id',
      },
    },
    blog_id: {
      type: DataTypes.STRING,
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
