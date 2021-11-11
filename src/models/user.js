import sequelize, { DataTypes }  from "../db/index.js"

const User = sequelize.define('user', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    current_token: {
        type: DataTypes.BIGINT,
        allowNull: true,
    }
}, {
    tableName: "users"
});

export default User