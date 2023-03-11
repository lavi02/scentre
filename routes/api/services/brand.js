var Router =  require('express');
var brand = require('../../../models/db_brand');
var main = require("../../../models/db_extra");
var router = Router();

router.get('/', async (req, res) => {
    let data = req.body;
    let result = await brand.brand_get(data);

    if (result != null) {
        res.status(200).send(result)
    }

    else {
        res.status(400).json({
            "message": err
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

router.get('/perfume', async (req, res) => {
    let data = await main.best_and_recommend(req);

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
    if (data != null) {
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