import { Model, DataTypes, Sequelize } from "sequelize";
import { User } from "./User.js"

export class Rating extends Model {
  public id!: number;
  public userId!: number;
  public movieId!: number;
  public rating!: number;
  public review?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function RatingFactory(sequelize: Sequelize): typeof Rating{
   Rating.init(
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
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Rating",
      tableName: "ratings",
    }
  );
  return Rating
}


