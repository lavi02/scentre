var Router =  require('express');
var order = require('../../database/db_order');
var user = require('../../database/db_users');
var router = Router();

router.get('/api/v1/order', (req, res) => {
    let data = order.order_get(req.body);
    let data_detail = order.order_detail(req.body);
    let user_detail = user.userStatus_get(req.body);
    if (data[0] == 0) {
        data = data[1]
        res.status(200).json({
            "client_id": data.user_id,
            "name": req.body.user_name,
            "order_number": data.order_number,
            "ph_number": data_detail.ph_number,
            "address": data_detail.user_address,
            "addr_detail": data_detail.user_addr_detail,
            "product_name": data.product_name,
            "option": data.option,
            "number_of_stocks": data.number_of_stocks,
            "common_price": data_detail.product_amount,
            "payment_price": data_detail.payment_detail,
            "used_point": data_detail.used_point,
            "left_point": user_detail.left_point,
            "payment_date": data.payment_date,
            "delivery_date": data_detail.delivery_date,
            "deli_date_detail": data_detail.deli_date_detail
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/order', (req, res) => {
    let data = order.preorder_post(req);
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
    let data = brand.brand_post(req);
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