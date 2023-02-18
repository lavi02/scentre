const jwt = require("jsonwebtoken");
const jwt_data = require("../controllers/jwt");

exports.auth = (req, res, next) => {
    try {
        decoded = jwt.verify(req.authorization, jwt_data.key);
        return next();
    } catch (err) {
        if (err.name == "TokenExpiredError") {
            return res.status(419).json(
                { "message": "The token is already expired." }
            )
        }

        if (err.name == "JsonWebTokenError") {
            return res.status(401).json(
                { "message": "unexpected token" }
            )
        }
    }
}