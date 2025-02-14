import { Model, DataTypes, Sequelize } from "sequelize";
import { User } from "./User.js"


export class Comment extends Model {
  public id!: number;
  public userId!: number;
  public movieOrShowId!: number;
  public content!: string;
}

export function CommentFactory(sequelize: Sequelize): typeof Comment{
 Comment.init(
    {
      username: {
        type: DataTypes.STRING,
        references: { model: User , key: "username" },
        allowNull: false,
      },
      movieOrShowId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
    }
  );
  return Comment
}


