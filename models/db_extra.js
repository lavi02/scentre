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

exports.perfumers_best_list = async (req) => {
    let data = await db_data.scentre_product.find(
        {},
        { 
            sort: sales_volume,
            limit: 5
        }
    );

    const perfumers_best_list_data = new db_data.scentre_perfume_recommend({
            'best': [ 
            data[0].product_code, data[1].product_code, data[2].product_code, 
            data[3].product_code, data[4].product_code
        ]}
    )

    return perfumers_best_list_data.save().then(
            (res) => {
                return res === faq_data;
            }
        ).catch((err) => { return err; });
}

exports.best_and_recommenD = async () => {
    return db_data.scentre_perfume_recommend.find({});
}