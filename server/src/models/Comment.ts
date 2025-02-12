import { Model, DataTypes, Sequelize } from "sequelize";

export class Comment extends Model {
  public id!: number;
  public userId!: number;
  public movieOrShowId!: number;
  public content!: string;
}

export function CommentFactory(sequelize: Sequelize): typeof Comment{
 Comment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
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
      sequelize
    }
  );
  return Comment
}


