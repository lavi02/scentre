var Router =  require('express');
var file_upload = require('../../middlewares/file_upload');
var router = Router();

const bcrypt = require("bcryptjs");
const db_data = require('../../../controllers/mg_collection');
const { jwt_query } = require('../../../controllers/jwt');

router.post('/api/v1/upload', (req, res) => {
    if (req.file) {
        let data = file_upload.uploadMiddleWare(req.body, req.file);
        if (data == 0) {
            res.status(201).json({
                "message": "successfully generated."
            })
        }

        else {
            res.status(400).json({
                "message": "bad input parameter"
            })
        }
    } else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})