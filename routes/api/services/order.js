var Router =  require('express');
var order = require('../../../models/db_order');
var user = require('../../../models/db_users');
var router = Router();

router.get('/api/v1/order', (req, res) => {
    let data = order.order_get(req)
    if (data == 0) {
        res.status(200).json({
            "checkState": data.checkState,
            "state": data.state,
            "previousState": data.state,
            "order_date": data.order_date,
            "payment_date": data.payment_date,
            "product_number": data.product_number,
            "user_id": data.user_id,
            "logis": data.logis,
            "extra_number": data.extra_number,
            "recallInvoice": data.recallInvoice,
            "recallDeliveryCharge": data.recallDeliveryCharge,
            "options": data.options,
            "quantity": data.quantity,
            "productName": data.productName,
            "brand": data.brand,
            "perfumer": data.perfumer,
            "orderNum": data.orderNum,
            "paymentMethod": data.paymentMethod,
            "usedPoint": data.usedPoint,
            "paidAmount": data.paidAmount,
            "stock": data.stock,
            "to": data.to,
            "deliveryCharge": data.deliveryCharge,
            "number": data.number,
            "address": data.address,
            "specAddress": data.specAddress,
            "memo": data.memo,
            "refundAmount": data.refundAmount,
            "orderProductNum": data.orderProductNum,
            "productPrice": data.productPrice,
            "bank": data.bank,
            "cost": data.cost,
            "profit": data.profit,
            "depositAmount": data.depositAmount,
            "process": data.process,
            "paymentScheduled": data.paymentScheduled,
            "imputation": data.imputation,
            "reason": data.reason
        })
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