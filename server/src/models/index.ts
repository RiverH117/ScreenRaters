import sequelize from '../config/connection'
import { UserFactory } from './user.js';
import { FavoriteFactory } from './Favorite.js';
import { RatingFactory } from './Rating.js';
import {CommentFactory} from './Comment.js'

const User = UserFactory(sequelize);
const Favorite = FavoriteFactory(sequelize);
const Rating = RatingFactory(sequelize);
const Comment = CommentFactory(sequelize);

export { User, Favorite,Comment, Rating };
