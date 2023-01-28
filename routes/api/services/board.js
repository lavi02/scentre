var Router =  require('express');
var brand = require('../../database/db_brand');
var router = Router();

router.get('/api/v1/brand', (req, res) => {
    let data = brand.brand_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "br_code": data[1],
            "br_name": data[2],
            "br_logo": data[3],
            "br_detail": data[4],
            "br_web_bg": data[5],
            "br_app_bg": data[6],
            "br_perfumer_list": data[7],
            "br_stocks": data[8]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/brand', (req, res) => {
    let data = brand.brand_post(req);
    if (data[0] == 0) {
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

router.delete('/api/v1/brand', (req, res) => {
    let data = brand.brand_post(req);
    if (data[0] == 0) {
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
