import  sequelize  from "../config/connection.js"; 
import { UserFactory } from "./User.js";


const User = UserFactory(sequelize);

// User.hasMany(User, {
//     onDelete: "CASCADE",
    
// });

export { sequelize, User };