const db_data = require('../../extra/mg_collection');

exports.order_detail = async (req) => {
    await db_data.scentre_order_detail.find(
        {
            'order_number': req.order_number,
            'user_name': req.user_name,
            'product_data': req.product_data
        }.exec((err, data) => {
            if (!err)
                return data;
            else return err;
        })
    )
}
exports.order_get = async (req) => {
    await db_data.scentre_order_data.find(
        {
            'order_number': req.order_number,
            'user_name': req.user_name,
            'order_date': req.order_date,
            'product_name': req.product_name
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.order_logs = async (req) => {
    await db_data.scentre_brand.find(
        { 'user_name': req.user_name }
    ).exec((err, data) => {
        if (!err)
            return [data];
    })
}

exports.preorder_get = async (req) => {
    await db_data.scentre_preorder_data.find(
        {
            'order_number': req.order_number,
            'user_name': req.user_name,
            'order_date': req.order_date,
            'bank_acc': req.bank_acc,
            'used_point': req.used_point,
            'br_name': req.br_name
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.preorder_post = (req) => {
    const brand_data = new db_data.scentre_preorder_data(
        {
            'order_date': req.order_date, 
            'order_number': req.order_number,
            'user_name': req.user_name,
            'payment_date': Date.now().toString(),
            'product_name': req.product_name,
            'bank_acc': req.bank_acc,
            'payment_detail': req.payment_amount,
            'payment_status': req.payment_status,
            'brand_name': req.br_name
        })

        brand_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.order_put = (req, res) => {
    db.query('', (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send(err);
        }
    })
}