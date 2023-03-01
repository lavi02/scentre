const db_data = require('../controllers/mg_collection');

exports.userStatus_get = async (req) => {
    return db_data.scentre_user_data.find(
        { 'id': req.id }
    )
}

exports.userStatus_post = (req) => {
    const user_data = new db_data.scentre_user_data(
        {
            "type": req.type,
            "id": req.id,
            "name": req.name,
            "password": req.password,
            "set_date": req.set_date,
            "gender": req.gender,
            "ph_number": req.ph_number,
            "br_number": req.br_number,
            "bs_category": req.bs_category,
            "bs_type": req.bs_type,
            "address": req.address,
            "addr_detail": req.addr_detail,
            "email": req.email,
            "point": 0,
            "times_of_order": 0,
            "status": 1,
            "register_date": Date.now()
        })

        return user_data.save().then(
            (res) => {
                return res === user_data;
            }
        ).catch((err) => { return err; });
}

exports.userStatus_put = (req) => {
    const { id } = req.id;
    return db_data.scentre_user_data.findByIdAndUpdate(id, req);
}

exports.change_userStatus_rank = async (req) => {
    return db_data.scentre_user_data.update(
        {
            "id": req.id
        },
        { "status": req.status }
    )
}

exports.userStatus_delete = async (req) => {
    return db_data.scentre_user_data.deleteOne(
        {
            "id": req.id
        }
    )
}