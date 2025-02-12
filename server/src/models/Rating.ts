import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/connection.js";

interface RatingAttributes {
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  review?: string;
}

interface RatingCreationAttributes extends Optional<RatingAttributes, "id"> {}

class Rating
  extends Model<RatingAttributes, RatingCreationAttributes>
  implements RatingAttributes
{
  public id!: number;
  public userId!: number;
  public movieId!: number;
  public rating!: number;
  public review?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "ratings",
  }
);

export default Rating;
