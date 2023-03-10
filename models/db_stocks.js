const db_data = require('../controllers/mg_collection');

exports.stocks_get = async (req) => {
    if (Object.keys(req).length === 0 && req.constructor === Object)
        return db_data.scentre_product.find({});

    return db_data.scentre_product.find(
        {
            'name': req.name,
            'tag': req.client_name,
            'product_name': req.product_name
        })
}

exports.ex = async (req) => {
    return db_data.scentre_calc_log.find(
        req
    )
}

exports.fee = async (req) => {
    return db_data.scentre_adjustment_list.find(
        req
    )
}

exports.stocks_post = async (req) => {
    const user_data = new db_data.scentre_product(
        {
            'name': req.name, 
            'tag': req.tag,
            'prod_short': req.prod_short,
            'search_tag': req.search_tag,
            'product_name': req.product_name,
            'model_name': req.model_name,
            'best': req.best,
            'subdivision': req.subdivision,
            'product_code': req.product_code,
            'perfumer_name': req.perfumer_name,
            'detail': req.detail,
            'expected_date': req.expected_date,
            'count': req.count,
            'out_of_stock': req.out_of_stock,
            'status': req.status,
            'price': req.price,
            'amount_saved': req.amount_saved,
            'amount_delivery': req.amount_delivery,
            'item_option': req.item_option,
            'item_option_price': req.item_option_price,
            'item_image': req.item_image,
            'item_image_sub': req.item_image_sub,
            'item_image_detail': req.item_image_detail,
            'item_note': req.item_note,
            'product_detail': req.product_detail,
            'event_data': req.event_data
        })

        return user_data.save().then(
            (result) => {
                return result === user_data;
            }
        ).catch((err) => { return err; });
}

exports.stocks_put = (req) => {
    return db_data.scentre_product.update({
        'name': req.name,
        'product_name': req.product_name,
        "model_name": req.model_name,
        "product_code": req.product_code,
        "perfumer_name": req.perfumer_name
    },
    { req })
}

exports.stocks_delete = async (req) => {
    return db_data.scentre_user_data.deleteMany(
        { product_code: req.product_code }
    )
}
