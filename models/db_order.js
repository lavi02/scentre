const db_data = require('../controllers/mg_collection');

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
            return [0, data];
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
        () => { return 0; }
    ).catch((err) => { return err; });
}

exports.order_put = (req) => {
    try {
        for (let i = 0; i < Object.keys(req).length; i++) {
            let keys = Object.keys(req)[i]
            let values = req[keys]
            db_data.scentre_preorder_data.update({
                    'order_number': req.name,
                    'user_name': req.product_name,
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
    await db_data.scentre_adjustment_list.find(
        {
            'br_number': req.br_number
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
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

    exchanges.save().then(
        () => {
            return 0;
        }
    ).catch((err) => { return err; });
}