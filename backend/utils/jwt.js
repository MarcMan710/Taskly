// backend/utils/jwt.js
const jwt = require("jsonwebtoken");
const config = require("../config/env");

const generateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, {
        expiresIn: "30d",
    });
};

module.exports = { generateToken };
