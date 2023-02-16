var Router =  require('express');
var servey = require('../../database/db_servey');
var router = Router();

router.get('/api/v1/services/servey', (req, res) => {
    let data = servey.servey_get(req);
    if (data.duplicate = false) {
        res.status(200).json({
            "str": data.answer[1],
            "img": data.answer[2],
            "notes": data.answer[3]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/services/servey', (req, res) => {
    let data = req;
    if (typeof(data.str) == "String" && typeof(data.img) == "String") {
        let result = servey.servey_post(data);

        if (result == 0) {
            res.status(200).json({
                "message": "successfully generated."
            })
        }
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.put('/api/v1/services/servey', (req, res) => {
    let data = req.body;
    if (typeof(data.str) == "String" && typeof(data.img) == "String") {
        let result = servey.servey_post(data);

        if (result == 0) {
            res.status(200).json({
                "message": "successfully generated."
            })
        }
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.delete('/api/v1/services/servey', (req, res) => {
    let data = servey.servey_get(req);
    if (data == 0) {
        res.status(200).json({
            "str": data.answer[1],
            "img": data.answer[2],
            "notes": data.answer[3]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

module.exports = router;
