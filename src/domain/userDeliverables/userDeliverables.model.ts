import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from 'uuid';
import sequelize from "../../infrastructure/database";
import DeliverablesModel from "../deliverables/deliverables.model";
import UserChallengesModel from "../userChallenges/userChallenges.model";
import { UserDeliverable } from "./userDeliverable.entity";

class UserDeliverablesModel extends Model<UserDeliverable> {}

UserDeliverablesModel.init({
    id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4()
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    explanation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    usersChallengesId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: UserChallengesModel,
          key: "id"
        }
    },
    challengeDeliverablesId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: DeliverablesModel,
          key: "id"
        }
    }
}, {
    tableName: "users_deliverables",
    timestamps: true,
    underscored: true,
    sequelize: sequelize
})

UserDeliverablesModel.hasOne(UserChallengesModel, {
    foreignKey: "id",
    sourceKey: "usersChallengesId",
    as: "usersChallenges"
});

UserDeliverablesModel.hasOne(DeliverablesModel, {
    foreignKey: "id",
    sourceKey: "challengeDeliverablesId",
    as: "challengeDeliverables"
});

export default UserDeliverablesModel