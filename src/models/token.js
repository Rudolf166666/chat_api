import sequelize, { DataTypes } from "../db/index.js"

const Token = sequelize.define('token', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: "tokens"
});

export default Token