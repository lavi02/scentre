const db_data = require('../../extra/mg_collection');

exports.servey_get = async (req) => {
    await db_data.sc.find(
        {'id': req.id }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
    )
}

exports.servey_post = (req) => {
    const servey_data = new db_data.scentre_servey(
        {  
            'username': req.user_name,
            'duplicate': req.duplicate,
            'answer': req.answer
        })

        servey_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.servey_put = (req) => {
    db_data.scentre_servey.update({
        'user_name': req.user_name,
    },
    {
        'answer': req.answer
    }.exec((err, data) => {
        if(!err)
            return data;
        else return err;
    })
    )
}

exports.servey_delete = async (req) => {
    await db_data.scentre_servey.deleteMany(
        {
            'user_name': req.user_name,
        }
    ).then(() => { return 0; })
    .catch((err) => { return err; })
}
