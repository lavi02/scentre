const db_data = require('../../controllers/mg_collection');

exports.order_admin_post = (req) => {
    const order_admin_data = new db_data.scentre_order_data(
    {
        'checkState': req.checkState,
        'state': req.state,
        'previousState': req.previousState,
        'order_date': req.orderDay,
        'payment_date': req.payDay,
        'product_number': req.productCode,
        'user_id': req.orderPerson,
        'logis': req.logis,
        'extra_number': req.invoice,
        'recallInvoice': req.recallInvoice,
        'recallDeliveryCharge': req.recallDeliveryCharge,
        'options': req.options,
        'quantity': req.quantity,
        'productName': req.productName,
        'brand': req.brand,
        'perfumer': req.perfumer,
        'orderNum': req.orderNum,
        'paymentMethod': req.paymentMethod,
        'usedPoint': req.usedPoint,
        'paidAmount': req.paidAmount,
        'stock': req.stock,
        'to': req.to,
        'deliveryCharge': req.deliveryCharge,
        'number': req.number,
        'address': req.address,
        'specAddress': req.specAddress,
        'memo': req.memo,
        'refundAmount': req.refundAmount,
        'orderProductNum': req.orderProductNum,
        'productPrice': req.productPrice,
        'bank': req.bank,
        'cost': req.cost,
        'profit': req.profit,
        'depositAmount': req.depositAmount,
        'process': req.process,
        'paymentScheduled': req.paymentScheduled,
        'imputation': req.imputation,
        'reason': req.reason
    })

    return order_admin_data.save().then(
        (res) => { return order_admin_data === res; }
    ).catch((err) => { return err; });
}