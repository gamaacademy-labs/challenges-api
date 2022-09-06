import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from 'uuid';
import sequelize from "../../infrastructure/database";
import ChallengeDeliverablesModel from "../challengeDeliverables/challengeDeliverables.model";
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
    userChallengeId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: UserChallengesModel,
          key: "id"
        }
    },
    challengeDeliverableId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: ChallengeDeliverablesModel,
          key: "id"
        }
    }
}, {
    tableName: "user_deliverables",
    timestamps: true,
    underscored: true,
    sequelize: sequelize
})

UserDeliverablesModel.hasOne(UserChallengesModel, {
    foreignKey: "id",
    sourceKey: "userChallengeId",
    as: "user_challenge"
});

UserDeliverablesModel.hasOne(ChallengeDeliverablesModel, {
    foreignKey: "id",
    sourceKey: "challengeDeliverableId",
    as: "challenge_deliverable"
});

export default UserDeliverablesModel