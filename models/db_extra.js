const db_data = require('../controllers/mg_collection');


exports.uri_get = async (req) => {
    return db_data.scentre_sns_url.find({})
}

exports.uri_post = async (req) => {
    const faq_data = new db_data.scentre_sns_url(
        {
            'title': req.uri_type, 
            'name_of_stock': req.link
        })

        return faq_data.save().then(
            (res) => {
                return res === faq_data;
            }
        ).catch((err) => { return err; });
}