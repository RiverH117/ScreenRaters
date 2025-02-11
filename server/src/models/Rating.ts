import { Model, DataTypes, Sequelize } from "sequelize";


expor Rating extends Model {
  public id!: number;
  public userId!: number;
  public movieOrShowId!: number;
  public rating!: number;
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

  export default Rating;

