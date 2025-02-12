import { Model, DataTypes, Sequelize } from "sequelize";


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
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
        allowNull: false,
      },
      movieOrShowId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating
}


