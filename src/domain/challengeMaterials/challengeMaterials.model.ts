import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from 'uuid';
import sequelize from "../../infrastructure/database";
import { ChallengeMaterial } from "./challengeMaterial.entity";
import ChallengesModel from "../challenges/challenges.model";

class ChallengeMaterialsModel extends Model<ChallengeMaterial> {}

ChallengeMaterialsModel.init({
    id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('file', 'link'),
        allowNull: false,
        defaultValue: 'link'
    },
    challengeId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
            model: ChallengesModel,
            key: "id"
        }
    }
}, {
    tableName: "challenge_materials",
    timestamps: true,
    underscored: true,
    sequelize: sequelize
});

export default ChallengeMaterialsModel;