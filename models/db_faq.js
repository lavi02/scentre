const db_data = require('../controllers/mg_collection');

exports.faq_get = async (req) => {
    await db_data.scentre_faq.find(
        {
            'title': req.body.title
        }.exec((err, data) => {
            if (!err)
                return [0, data];
            else
                return [1, err];
        })
    );
};

exports.faq_post = (req) => {
    const faq_data = new db_data.scentre_faq(
        {
            'title': req.title, 
            'name_of_stock': req.name_of_stock,
            'contents': req.contents
        })

        faq_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.faq_delete = async (req) => {
    await db_data.scentre_faq.deleteMany(
        {
            'name_of_stock': req.body.name_of_stock,
            'index': req.params.index
        }
    ).then(() => { return 0; })
    .catch((err) => { return err; })
}