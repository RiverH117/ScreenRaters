import sequelize from '../config/connection'
import { UserFactory } from './user.js';
import { FavoriteFactory } from './Favorite';
import { RatingFactory } from './Rating';
import {CommentFactory} from './Comment'

const User = UserFactory(sequelize);
const Favorite = FavoriteFactory(sequelize);
const Rating = RatingFactory(sequelize);
const Comment = CommentFactory(sequelize);

export { User, Favorite, Rating, Comment };
