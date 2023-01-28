const db_data = require('../../extra/mg_collection');


exports.uri_get = async (req) => {
    await db_data.scentre_sns_url.find(
        {}.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.uri_post = (req) => {
    const faq_data = new db_data.scentre_sns_url(
        {
            'title': req.uri_type, 
            'name_of_stock': req.link
        })

        faq_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}