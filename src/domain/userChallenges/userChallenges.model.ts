import { UserChallenge } from "./userChallenges.entity";
import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../../infrastructure/database";
import ChallengesModel from "../challenges/challenges.model";
import UsersModel from "../users/users.model";

class UserChallengesModel extends Model<UserChallenge> {}

UserChallengesModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    score: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    challengeId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: ChallengesModel,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: UsersModel,
        key: "id",
      },
    },
  },
  {
    tableName: "user_challenges",
    timestamps: true,
    underscored: true,
    sequelize: sequelize,
  }
);

UserChallengesModel.hasOne(UsersModel, {
  foreignKey: "id",
  sourceKey: "userId",
  as: "user",
});

export default UserChallengesModel;
