const db_data = require('../controllers/mg_collection');

exports.qna_get = async (req) => {
    await db_data.scentre_qna.find(
        {
            'index': req.index,
            'title': req.title
        }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.qna_post = (req) => {
    const faq_data = new db_data.scentre_qna(
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
    await db_data.scentre_qna.deleteMany(
        {
            'name_of_stock': req.name_of_stock,
            'index': req.index
        }
    ).then(() => { return 0; })
    .catch((err) => { return err; })
}