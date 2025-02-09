import { Model, DataTypes, Sequelize } from "sequelize";

class Favorite extends Model {
  public id!: number;
  public userId!: number;
  public movieOrShowId!: number;
}

export function FavoriteFactory(sequelize: Sequelize): typeof Favorite {
  Favorite.init(
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
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
}
