var Router =  require('express');
var stocks = require('../../../models/db_stocks');
var main = require("../../../models/db_main");
var router = Router();

router.get('/', (req, res) => {
    let data = req.body;
    let result = await stocks.stocks_get(data);
    if (result != null) {
        res.status(200).json({
            'data': data[0]
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

router.delete('/', (req, res) => {
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