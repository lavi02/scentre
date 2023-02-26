const db_data = require('../controllers/mg_collection');

exports.servey_get = async (req) => {
    return db_data.sc.find(
        {'id': req.id }
    )
}

exports.servey_post = (req) => {
    const servey_data = new db_data.scentre_servey(
        {  
            'username': req.user_name,
            'duplicate': req.duplicate,
            'answer': req.answer
        })

        return servey_data.save().then(
            (res) => {
                return res === servey_data;
            }
        ).catch((err) => { return err; });
}

exports.servey_put = (req) => {
    return db_data.scentre_servey.update({
        'user_name': req.user_name,
    },
    { 'answer': req.answer})
}

exports.servey_delete = async (req) => {
    return db_data.scentre_servey.deleteMany(
        {
            'user_name': req.user_name,
        }
    )
}
