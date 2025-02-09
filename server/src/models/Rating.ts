import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

class Rating extends Model {
  public id!: number;
  public userId!: number;
  public movieOrShowId!: number;
  public rating!: number;
}

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

export default Rating;
