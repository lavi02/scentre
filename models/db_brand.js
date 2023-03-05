const db_data = require('../controllers/mg_collection');

exports.brand_get = async (req) => {
    if (req.data_type == "brand_name") {
        return db_data.scentre_brand.find(
            {
                'brand_name': req.data_type,
                'code_number': req.data_detail
            }
        )
    }    
}

exports.brand_add_perfumer = async (req) => {
    let data = db_data.scentre_brand.find(
        { 'br_code': req.br_code }
    )

    let memberData = data[0].perfumer_data;
    for (let i = 0; i < memberData.length(); i++) {
        if (memberData[i].id == req.perfumer_id) {
            memberData.splice(i, 1);
        }
    }
    return db_data.scentre_brand.findByIdAndUpdate(
        { 'br_code': req.br_code },
        { 'perfumer_data': memberData }
    )
}

exports.perfumer_get = async (req) => {
    return db_data.scentre_brand.find(
        {
            'perfumer_data': req.user_id,
            'code_number': req.br_code
        }
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
            perfumer_data: req.br_perfumer_list
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
            { 'br_code': req.br_code }
    )
}