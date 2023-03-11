var Router =  require('express');
var order = require('../../../models/db_order');
var user = require('../../../models/db_users');
var router = Router();

router.get('/api/v1/order', async (req, res) => {
    let data = await order.order_get(req);
    if (data != null) {
        res.status(200).send(data);
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/order', (req, res) => {
    let data = order.order_post(req.body);
    if (data == 0) {
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

router.put('/api/v1/order', (req, res) => {
    let data = order.order_put(req.body);
    if (data == 0) {
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

module.exports = router;