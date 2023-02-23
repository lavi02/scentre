const jwt = require("jsonwebtoken");
const urandom = require("crypto");
exports.key = urandom.createHash('sha512').update('h3n3sy4839').digest('hex');

exports.jwt_query = async (req) => {
    const id = req.id;
    
    let payload = jwt.sign(
        { id: id },
        key,
        { expiresIn: "60m" }
    )

    return payload;
}