const db_data = require('../controllers/mg_collection');

exports.order_get = async (req) => {
    return db_data.scentre_order_data.find(
        {}
    );
}

exports.order_admin_get = async (req) => {
    return db_data.scentre_order_data.find({
        'brand': req.brand
    })
}

exports.order_get_all = async () => {
    return db_data.scentre_order_data.find({});
}

exports.order_logs = async (req) => {
    return db_data.scentre_order_data.find(
        { 'user_name': req.user_name }
    )
}

exports.preorder_get = async (req) => {
    return db_data.scentre_order_data.find(
        {
            state: "0",
            productNum: req.productNum,
            user_id: req.user_id,
            orderNum: req.orderNum
        }
    );
}

exports.order_post = async (req) => {
    let data = req.body;

    const order_data = new db_data.scentre_order_data(
        {
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
        }
    )

    return order_data.save().then(
        (res) => { return order_data === res; }
    ).catch((err) => { return err; });
}

exports.preorder_post = (req) => {
    const brand_data = new db_data.scentre_order_data(
    {
        'state': 0,
        'orderNum': req.order_Num,
        'user_id': req.user_id,
        'quantity': req.quantity,
        'payment_date': Date.now().toString(),
        'perfumer': req.perfumer,
        'product_number': req.product_number,
        'productName': req.productName,
        'bank': req.bank,
        'payment_detail': req.payment_amount,
        'payment_status': req.payment_status,
        'brand': req.brand,
        'usedPoint': req.usedPoint,
        'paidAmount': req.paidAmount,
        'address': req.address,
        'specAddress': req.specAddress,
        'cost': req.cost,
        'depositAmount': req.depositAmount
    })

    return brand_data.save().then(
        (res) => { return brand_data === res; }
    ).catch((err) => { return err; });
}

exports.order_put = (req) => {
    try {
        for (let i = 0; i < Object.keys(req).length; i++) {
            let keys = Object.keys(req)[i]
            let values = req[keys]
            db_data.scentre_preorder_data.update({
                    'orderNum': req.orderNum,
                    'user_id': req.user_id,
            },
            {
                keys: values
            })
        }
        return 0;
    } catch (err) {
        return err;
    }
}

exports.order_get_fees = async (req) => {
    return db_data.scentre_adjustment_list.find(
        {
            'br_number': req.br_number
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.order_fees = async (req) => {
    const fees = new db_data.scentre_adjustment_list(
        {
            'br_number': req.br_number,
            'total_amount': req.total_amount,
            'fee': req.fee,
            'calc_amount': req.calc_amount,
            'none_calc_amount': req.none_calc_amount
        }
    )

    return fees.save().then(
        (res) => {
            return res === fees;
        }
    ).catch((err) => { return err; });
}

exports.order_get_exchanges = (req) => {
    const exchanges = new db_data.scentre_order_data(
        {
            'order_date': Date.now(), 
            'order_number': req.order_number,
            'user_name': req.user_name,
            'payment_date': Date.now().toString(),
            'product_name': req.product_name,
            'bank_acc': req.bank_acc,
            'payment_detail': req.payment_amount,
            'payment_status': req.payment_status,
            'brand_name': req.br_name
        }
    )

    return exchanges.save().then(
        (res) => {
            return res === exchanges;
        }
    ).catch((err) => { return err; });
}