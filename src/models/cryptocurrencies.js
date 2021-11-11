import sequelize, { DataTypes } from "../db/index.js"

const Cryptocurrency = sequelize.define('cryptocurrency', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    percentage:{
        type: DataTypes.DOUBLE,
        allowNull: true,
    }
}, {
    tableName: "cryptocurrency"
});

export default Cryptocurrency