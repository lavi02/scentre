var Router =  require('express');
var order = require('../../database/db_order');
var router = Router();

router.get('/api/v1/order', (req, res) => {
    let data = brand.brand_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "client_id": data[1],
            "name": data[2],
            "order_number": data[3],
            "ph_number": data[4],
            "address": data[5]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/order', (req, res) => {
    let data = order.order_post(req);
    if (data[0] == 0) {
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
    let data = brand.brand_post(req);
    if (data[0] == 0) {
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