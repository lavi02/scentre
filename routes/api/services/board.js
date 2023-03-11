var Router =  require('express');
var brand = require('../../../models/db_brand');
var main = require("../../../models/db_extra");
var router = Router();

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

module.exports = router;
