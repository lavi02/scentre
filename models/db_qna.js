const db_data = require('../controllers/mg_collection');

exports.qna_get = async (req) => {
    return db_data.scentre_qna.find(
        {
            'index': req.index,
            'title': req.title
        }
    )
}

exports.qna_post = (req) => {
    const faq_data = new db_data.scentre_qna(
        {
            'title': req.title, 
            'name_of_stock': req.name_of_stock,
            'contents': req.contents
        })

        return faq_data.save().then(
            (res) => {
                return res === faq_data;
            }
        ).catch((err) => { return err; });
}

exports.faq_delete = async (req) => {
    return db_data.scentre_qna.deleteMany(
        {
            'name_of_stock': req.name_of_stock,
            'index': req.index
        }
    )
}