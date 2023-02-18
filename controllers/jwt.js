const jwt = require("jsonwebtoken");
const urandom = require("node:crypto");
exports.key = urandom(64).toString('hex');

exports.jwt_query = async (req) => {
    const id = req.id;
    
    let payload = jwt.sign(
        { id: id },
        key,
        { expiresIn: "60m" }
    )

    return payload;
}