var Router =  require('express');
var brand = require('../../../models/db_brand');
var main = require("../../../models/db_extra");
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

router.get('/api/v1/brand/perfume', (req, res) => {
    let data = main.best_and_recommend();
    if (data == 0) {
        res.status(200).json({
            "best": data[0].best,
            "recommend": data[0].recommend
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/api/v1/uri', async (req, res) => {
    let data = await main.uri_get();
    
    if (data != null) {
        res.status(200).json({
            "kakao": data[0].kakao,
            "youtube": data[0].youtube,
            "instagram": data[0].instagram
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/api/v1/uri/:uri', async (req, res) => {
    let data = await main.uri_get();

    if (data != null) {
        if (req.params.uri == 'kakao') {
            res.status(200).json({
                "kakao": data[0].kakao
            })
        }

        else if (req.params.uri == 'youtube') {
            res.status(200).json({
                "youtube": data[0].youtube
            })
        }

        else {
            res.status(200).json({
                "instagram": data[0].instagram
            })
        }
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
