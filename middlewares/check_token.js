const jwt = require("../controllers/jwt");
var Router =  require('express');
var users = require('../models/db_users');
var router = Router();

router.get("/api/v1/jwt_payload", jwt.jwt_auth, (req, res) => {
    const id = req.decoded.id;
    return res.status(200).json({
        message: "토큰이 유효합니다.",
        data: {
            "id": id
        }
    })
})

module.exports = router;