const db_data = require('../controllers/mg_collection');

exports.review_get = async (req) => {
        return db_data.scentre_review.find(
            {}
        )
}

exports.review_post = (req) => {
    const user_data = new db_data.scentre_product(
        {
            'title': req.title, 
            'name_of_stock': req.name_of_stock,
            'contents': req.contents
        })

        return user_data.save().then(
            (res) => {
                return res === user_data;
            }
        ).catch((err) => { return err; });
}

exports.review_delete = async (req) => {
    return db_data.scentre_user_data.deleteMany(
        {
            'name_of_stock': req.name_of_stock,
            'index': req.index
        }
    )
}