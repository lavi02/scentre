var Router =  require('express');
var brand = require('../../../models/db_brand');
var router = Router();

router.get('/api/v1/brand', (req, res) => {
    let data = brand.brand_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "br_code": data.br_code,
            "br_name": data.br_name,
            "br_logo": data.br_logo,
            "br_detail": data.br_detail,
            "br_web_bg": data.br_web_bg,
            "br_app_bg": data.br_app_bg,
            "br_perfumer_list": data.br_perfumer_list,
            "br_stocks": data.br_stocks
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/board', (req, res) => {
    let data = brand.brand_post(req);
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
})

router.delete('/api/v1/board', (req, res) => {
    let data = brand.brand_post(req);
    if (data == 0) {
        res.status(201).json({
            "message": "successfully removed."
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/api/v1/brand/perfume', (req, res) => {
    let data = brand.brand_get(req);
    if (data == 0) {
        res.status(200).json({
            "br_code": data[1],
            "recommend": data[2]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/brand/perfumers', (req, res) => {
    let data = brand.brand_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "br_code": data[1],
            "recommend": data[2]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

module.exports = router;
