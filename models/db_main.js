const db_data = require('../controllers/mg_collection');

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

exports.banner_get = async (req) => {
    await db_data.scentre_mainpage.find(
        {}.exec((err, data) => {
            if (!err)
                return data;
            else return err;
        })
    )
}