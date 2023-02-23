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

exports.image_datas_get = async (req) => {
    await db_data.scentre_image.find(
        { 
            image_name: req.image_name,
            user_name: req.user_name
         }.exec((err, data) => {
            if (!err)
                return data;
            else return err;
        })
    )
}

exports.image_datas_post =  (req) => {
    const image_data = new db_data.scentre_image(
        {
            image_name: req.image_name,
            user_name: req.user_name
        })

        image_data.save().then(
            () => { return 0; }
        ).catch((err) => { return err; });
}