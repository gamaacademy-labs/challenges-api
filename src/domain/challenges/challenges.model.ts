import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../../infrastructure/database";
import DeliverablesModel from "../deliverables/deliverables.model";
import { Challenge } from "./challenge.entity";

class ChallengesModel extends Model<Challenge> {}

ChallengesModel.init(
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
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM("easy", "medium", "hard"),
      allowNull: false,
      defaultValue: "easy"
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "challenges",
    timestamps: true,
    underscored: true,
    sequelize: sequelize
  }
);

ChallengesModel.hasMany(DeliverablesModel, {
  foreignKey: "challenge_id",
  sourceKey: "id",
  as: "deliverables"
});

export default ChallengesModel;