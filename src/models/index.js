"use strict";
require('dotenv').config();

// Connects to our database depending on the URI as an environmental variable

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require("sequelize");

const food = require("./ food");
const clothes =require("./clothes")


let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: true,
                native: true
            }
        } : {};

//  connect to Postgres
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
//now we have our connection

module.exports = {
    db: sequelize,
   food: food (sequelize, DataTypes),
   clothes: clothes(sequelize,DataTypes)
};

