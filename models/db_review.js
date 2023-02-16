const db_data = require('../controllers/mg_collection');

exports.review_get = async (req) => {
    await db_data.scentre_review.find(
        {
            'title': req.title
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.review_post = (req) => {
    const user_data = new db_data.scentre_product(
        {
            'title': req.title, 
            'name_of_stock': req.name_of_stock,
            'contents': req.contents
        })

        user_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.review_delete = async (req) => {
    await db_data.scentre_user_data.deleteMany(
        {
            'name_of_stock': req.name_of_stock,
            'index': req.index
        }
    ).then(() => { return 0; })
    .catch((err) => { return err; })
}