var Router =  require('express');
var user = require('../../../models/db_users');
var main = require("../../../models/db_extra");
var order = require("../../../models/db_order");
var stocks = require("../../../models/db_stocks");
var router = Router();

router.get('/user', (req, res) => {
    let data = user.userStatus_get(req.body);
    if (data[0] != null) {
        res.status(200).json({
            data: data[0]
        })
    }

    else {
        res.status(401).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/ex', (req, res) => {
    let data = stocks.ex(req.body);
    if (data[0] != null) {
        res.status(200).json({
            data: data[0]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/fee', (req, res) => {
    let data = stocks.fee(req.body);
    if (data[0] != null) {
        res.status(200).json({
            data: data[0]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/order', (req, res) => {
    let data = order.order_admin_get(req.body);
    if (data[0] != null) {
        res.status(200).json({
            data: data[0]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

module.exports = router;
