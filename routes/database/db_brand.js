const db_data = require('../../extra/mg_collection');

exports.brand_get = async (req) => {
    await db_data.scentre_brand.find(
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
    await db_data.scentre_brand.find(
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
    await db_data.scentre_.find(
        {}.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.brand_post = (req) => {
    const brand_data = new db_data.scentre_brand(
        {
            'br_code': req.br_code, 
            'br_name': req.br_name,
            'br_logo': req.br_logo,
            'br_detail': req.br_detail,
            'br_web_bg': req.br_web_bg,
            'br_app_bg': req.br_app_bg,
            'br_perfumer_list': req.br_perfumer_list
        })

        brand_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.brand_delete = async (req) => {
    await db_data.scentre_faq.deleteMany(
        {
            'br_code': req.br_code,
            'perfumer_name': req.perfumer_list
        }
    ).then(() => { return 0; })
    .catch((err) => { return err; })
}