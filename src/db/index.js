import Sequelize from 'sequelize'
import config from '../../config/index.js'
const sequelize = new Sequelize(config.db)
export default sequelize
export const {DataTypes}=Sequelize