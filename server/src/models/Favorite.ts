import { Model, DataTypes, Sequelize } from "sequelize";
import { User } from "../models/User.js"


export class Favorite extends Model {
  public id!: number;
  public userId!: number;
  public movieOrShowId!: number;
}

export function FavoriteFactory(sequelize: Sequelize): typeof Favorite {
  Favorite.init(
    {
      username: {
        type: DataTypes.STRING,
        references: { model: User, key: "username" },
        allowNull: false,
      },
      movieOrShowId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Favorite",
      tableName: "favorites"
    }
  );
  return Favorite;
}

