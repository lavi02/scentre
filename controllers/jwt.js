const jwt = require("jsonwebtoken");
const urandom = require("crypto");
const key = urandom.createHash('sha512').update('h3n3sy4839').digest('hex');

exports.jwt_query = (req) => {
    const id = req.id;
    
    let payload = jwt.sign(
        { id: id },
        key,
        { expiresIn: "60m" }
    )

    return payload;
}

exports.jwt_auth = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, key);
        return next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(419).json({
                message: "토큰이 만료되었습니다."
            })
        }

        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "토큰이 유효하지 않습니다."
            })
        }
    }
}