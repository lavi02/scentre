const db_data = require('../../extra/mg_collection');

exports.userStatus_get = async (id) => {
    await db_data.scentre_user_data.find(
        { 'id': id }.exec((err, data) => { 
            if (!err) 
                return data;
            else return err; 
        })
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

        user_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.userStatus_put = (req) => {
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

        user_data.save().then(
            () => {
                return 0;
            }
        ).catch((err) => { return err; });
}

exports.change_userStatus_rank = async (req) => {
    await db_data.scentre_user_data.update(
        {
            "id": req.id,
            "name": req.name,
        },
        { "status": req.status }
    ).then(
        () => {
            return 0;
        }
    ).catch((err) => { return err; })
}

exports.userStatus_delete = async (req) => {
    await db_data.scentre_user_data.update(
        {
            "type": req.type,
            "id": req.id,
            "name": req.name
        }
    ).then(
        () => {
            return 0;
        }
    ).catch((err) => { return err; })
}