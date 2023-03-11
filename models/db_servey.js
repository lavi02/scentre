const db_data = require('../controllers/mg_collection');

exports.servey_get = async (req) => {
    return db_data.scentre_servey.find({});
}

exports.servey_data_get = async (req) => {
    return db_data.scentre_serveydata.find(
        { username: req.username }
    )
}

exports.servey_post = (req) => {
    const servey_data = new db_data.scentre_servey(
        {  
            'index': req.index,
            'duplicate': req.duplicate,
            'image': req.image,
            'answer': req.answer,
            'subQuestion': req.subQuestion
        })

        return servey_data.save().then(
            (res) => {
                return res === servey_data;
            }
        ).catch((err) => { return err; });
}

exports.servey_data_post = (req) => {
    const servey_data = new db_data.scentre_serveydata(
        { 
            'userid': req.userid,
            'qna': req.qna
        })

        return servey_data.save().then(
            (res) => {
                return res === servey_data;
            }
        ).catch((err) => { return err; });
}

exports.servey_put = (req) => {
    return db_data.scentre_servey.update({
        'index': req.index
    },
    { req })
}

exports.servey_data_put = (req2, req) => {
    return db_data.scentre_servey.update({
        'userid': req.userid
    },
    { req })
}

exports.servey_delete = async (req) => {
    return db_data.scentre_servey.deleteMany(
        {
            'index': req.index
        }
    )
}

exports.servey_data_delete = async (req) => {
    return db_data.scentre_servey.deleteMany(
        {
            'userid': req.userid
        }
    )
}
