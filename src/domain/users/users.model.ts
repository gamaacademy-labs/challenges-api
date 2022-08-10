import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from 'uuid';
import sequelize from "../../infrastructure/database";
import { User } from "./user.entity";

class UsersModel extends Model<User> {}

UsersModel.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4()
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "users",
    timestamps: true,
    underscored: true,
    sequelize: sequelize
})

export default UsersModel