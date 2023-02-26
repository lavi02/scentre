const db_data = require('../controllers/mg_collection');

exports.brand_get = async (req) => {
    return db_data.scentre_brand.find(
        {
            'brand_name': req.data_type,
            'code_number': req.data_detail
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.perfumer_get = async (req) => {
    return db_data.scentre_brand.find(
        {
            'perfumer_data': req.user_id,
            'code_number': req.br_code
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.perfume_recommend = async () => {
    return db_data.scentre_brand.find(
        {}.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.brand_post = async (req) => {
    const brand_data = new db_data.scentre_brand(
        {
            code_number: req.br_code, 
            brand_name: req.br_name,
            logo: req.br_logo,
            brand_detail: req.br_detail,
            image_web: req.br_web_bg,
            image_app: req.br_app_bg,
            perfumer_data: req.br_perfumer_list,
            product_data: req.br_product_data,
            payment_method: req.payment_method
        })

        return brand_data.save().then(
            (result) => {
                return result === brand_data;
            }
        ).catch((err) => {
            console.log(err);
            return err
        });
}

exports.brand_delete = async (req) => {
    return db_data.scentre_faq.deleteMany(
        {
            'br_code': req.br_code,
            'perfumer_name': req.perfumer_list
        }
    )
}