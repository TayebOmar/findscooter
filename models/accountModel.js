import Sequelize from "sequelize";
import database from '../services/database.js';

const Account = database.define('acconut' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykey: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: {
        type :Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    verficationCode : Sequelize.INTEGER,
    isVerifed: Sequelize.BOOLEAN
});

export default Account;