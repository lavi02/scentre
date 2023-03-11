var Router =  require('express');
var stocks = require('../../../models/db_stocks');
var main = require("../../../models/db_main");
var router = Router();

router.get('/stocks/', async (req, res) => {
    let data = req.body;
    let result = await stocks.stocks_get(data);
    console.log(result);
    if (result != null) {
        res.status(200).json(result);
    }

    else {
        res.status(400).json({
            "message": "there is no datas."
        })
    }
})

router.post('/stocks/', async function (req, res) {
    let data = req.body;
    let result = await stocks.stocks_post(data);

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

router.delete('/stocks/', async (req, res) => {
    let data = await stocks.stocks_delete(req.body);
    if (data != null) {
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

module.exports = router;