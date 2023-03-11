const db_data = require('../controllers/mg_collection');

exports.brand_get = async (req) => {
    console.log(req);
        
    if (Object.keys(req).length === 0 && req.constructor === Object)
        return db_data.scentre_brand.find({});

    return db_data.scentre_brand.find(
        { 'br_code': req.br_code }
    )
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
            br_code: req.br_code, 
            br_name: req.br_name,
            br_logo: req.br_logo,
            br_detail: req.br_detail,
            br_web_bg: req.br_web_bg,
            br_app_bg: req.br_app_bg,
            br_perfumer_list: req.br_perfumer_list
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