import sequelize from '../config/connection'
import { UserFactory } from './user.js';
import { FavoriteFactory } from './Favorite';

const User = UserFactory(sequelize);
const Favorite = FavoriteFactory(sequelize);

export { User, Favorite,  };
