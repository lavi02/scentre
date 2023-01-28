const db_data = require('../../extra/mg_collection');

exports.stocks_get = async (req) => {
    await db_data.scentre_product.find(
        {
            'name': req.name, 
            'tag': req.tag,
            'prod_short': req.prod_short,
            'search_tag': req.search_tag,
            'product_name': req.product_name
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.stocks_post = (req) => {
    const user_data = new db_data.scentre_product(
        {
            'name': req.name, 
            'tag': req.tag,
            'prod_short': req.prod_short,
            'search_tag': req.search_tag,
            'product_name': req.product_name,
            model_name: req.model_name,
            product_code: req.product_code,
            perfumer_name: req.perfumer_name,
            detail: req.detail,
            expected_date: req.expected_date,
            count: req.count,
            out_of_stock: req.out_of_stock,
            status: req.status,
            price: req.price,
            amount_saved: req.amount_saved,
            amount_delivery: req.amount_delivery,
            item_option: req.item_option,
            item_option_price: req.item_option_price,
            item_image: req.item_image,
            item_image_sub: req.item_image_sub,
            item_image_detail: req.item_image_detail,
            item_note: req.item_note,
            product_detail: req.product_detail,
            event_data: req.event_data
        })

        user_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.stocks_put = (req) => {
    db_data.scentre_product.update(
        {
            'name': req.name, 
            'tag': req.tag,
            'prod_short': req.prod_short,
            'search_tag': req.search_tag,
            'product_name': req.product_name,
            model_name: req.model_name,
            product_code: req.product_code,
            perfumer_name: req.perfumer_name,
            detail: req.detail,
            expected_date: req.expected_date,
            count: req.count,
            out_of_stock: req.out_of_stock,
            status: req.status,
            price: req.price,
            amount_saved: req.amount_saved,
            amount_delivery: req.amount_delivery,
            item_option: req.item_option,
            item_option_price: req.item_option_price,
            item_image: req.item_image,
            item_image_sub: req.item_image_sub,
            item_image_detail: req.item_image_detail,
            item_note: req.item_note,
            product_detail: req.product_detail,
            event_data: req.event_data
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.stocks_delete = async (req) => {
    await db_data.scentre_user_data.deleteMany(
        { product_code: req.product_code }
    ).then(() => { return 0; })
    .catch((err) => {return err; })
}
