var Router =  require('express');
var brand = require('../../../models/db_brand');
var router = Router();

router.get('/', (req, res) => {
    let data = req.body;
    let result = brand.brand_get(data);
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
            "message": error 
        })
    }
})

router.post('/', async function (req, res) {
    let data = req.body;
    let result = await brand.brand_post(data);

    if (result == true) {
        res.status(201).json({
            "message": "successfully generated."
        })
    }

    else {
        res.status(401).json({
            message: result
        })
    }
})

router.delete('/', (req, res) => {
    let data = brand.brand_delete(req.body);
    if (data.acknowledges === true) {
        res.status(201).json({
            "message": "successfully removed."
        })
    }

    else {
        res.status(400).json({
            "message": "test"
        })
    }
})

router.get('/api/v1/brand/perfume', (req, res) => {
    let data = brand.brand_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "br_code": data.br_code,
            "recommend": data.br_
        })
    }

    else {
        res.status(400).json({
            "message": "test"
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
            "message": "test"
        })
    }
})

module.exports = router;