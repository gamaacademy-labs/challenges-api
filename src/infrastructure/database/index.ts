import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "../../config/secrets";

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: Number(DB_PORT),
  define: {
    timestamps: true,
  },
})

export default sequelize;