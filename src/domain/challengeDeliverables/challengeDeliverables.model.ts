import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../../infrastructure/database";
import { ChallengeDeliverable } from "./challengeDeliverable.entity";

class ChallengeDeliverablesModel extends Model<ChallengeDeliverable> {}

ChallengeDeliverablesModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4()
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    averageTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    challengeId: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  },
  {
    tableName: "challenge_deliverables",
    timestamps: true,
    underscored: true,
    sequelize: sequelize
  }
);

export default ChallengeDeliverablesModel;
