var Router =  require('express');
var brand = require('../../../models/db_brand');
var main = require("../../../models/db_extra");
var router = Router();

router.get('/', (req, res) => {
    let data = req.body;
    let result = brand.brand_get(data);
    if (result[0] == 0) {
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

router.get('/perfume', (req, res) => {
    let data = main.best_and_recommend(req);
    if (data != null) {
        res.status(200).json({
            "br_code": data[0].best,
            "recommend": data[0].recommend
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter."
        })
    }
})

router.post('/perfumers', (req, res) => {
    let data = brand.brand_add_perfumer(req.body);
    if (data[0] == 0) {
        res.status(200).json({
            "message": "successfully added."
        })
    }

    else {
        res.status(400).json({
            "message": "invalid input"
        })
    }
})

module.exports = router;