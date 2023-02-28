const db_data = require('../controllers/mg_collection');

exports.perfumer_get = async (req) => {
    return db_data.scentre_brand.find(
        {
            'perfumer_data': req.user_id,
            'code_number': req.br_code
        }
    ).then(
        () => { return 0; }
    ).catch((err) => { return err; });
}

exports.banner_get = async () => {
    return db_data.scentre_mainpage.find({});
}

exports.image_datas_get = async (req) => {
    await db_data.scentre_image.find(
        { 
            image_name: req.image_name,
            user_name: req.user_name
         }
    );
}

exports.image_datas_post =  (req) => {
    const image_data = new db_data.scentre_image(
        {
            image_name: req.image_name,
            user_name: req.user_name
        })

        return image_data.save().then(
            (res) => { return res === image_data; }
        ).catch((err) => { return err; });
}