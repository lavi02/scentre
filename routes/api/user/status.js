var Router =  require('express');
var users = require('../../../models/db_users');
var router = Router();

const bcrypt = require("bcryptjs");
const db_data = require('../../../controllers/mg_collection');
const { jwt_query } = require('../../../controllers/jwt');
const mails = require("../../../middlewares/mail_system");

router.get('/api/v1/users', async (req, res) => {
    let data = await users.userStatus_get(req.body);
    data = data[0];
    
    if (data != null) {
        
        res.status(200).json({
            "type": data.type,
            "id": data.id,
            "name": data.name,
            "password": req.password,
            "set_date": data.set_date,
            "ph_number": data.ph_number,
            "br_number": data.bs_number,
            "bs_category": data.bs_category,
            "bs_type": data.bs_type,
            "address": data.address,
            "addr_detail": data.addr_detail,
            "email": data.email,
            "point": data.point,
            "times_of_order": data.times_of_order,
            "status": data.status,
            "register_date": data.register_date,
            "time_login": data.time_login,
            "time_logout": data.time_logout
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/api/v1/users/check_id', async (req, res) => {
    let data = await users.userStatus_get(req.body);
    data = data[0];

    if (data != null)
        res.status(200).json(
            { "message": "Doesn't match" }
        )
    else if (data == null) {
        res.status(409).json(
            { "message": "already used ID" }
        )
    } else {
        res.status(400).json(
            { "message": "invalid input" }
        )
    }
})

router.get('/api/v1/users/find_acc', async (req, res) => {
    let data = await users.userStatus_get(req.body);
    data = data[0];

    if (req.body.type == "ID") {
        if (data != null) {
            res.status(200).json(
                { "id": data.id }
            )
        } else {
            if ((req.body.name == data.name) && (req.body.email == data.email)) {
                res.status(404).json(
                    { "message": "email isn't match" }
                )
            }

            else {
                res.status(400).json(
                    { "message": "invalid input" }
                )
            }
        }
    } else if (req.body.type == "Password") {
        if (data != null) {

            let pswd_result = await users.userStatus_put(req.body);
            console.log(pswd_result);
            if (pswd_result.ok == 1) {
                const mail_data = mails.opt(data.email, "비밀번호가 변경되었습니다.", "변경된 비밀번호: " + data.email);
                mails.sendMail(mail_data);

                res.status(200).json(
                    { "message": "successfully Changed." }
                )
            }

            else {
                res.status(404).json(
                    { "message": "something is wrong." }
                )
            }
        } else {
            if ((req.body.name == data.name) && (req.body.email == data.email)) {
                res.status(404).json(
                    { "message": "email isn't match" }
                )
            }

            else {
                res.status(400).json(
                    { "message": "invalid input" }
                )
            }
        }
    }
})

router.put('/api/v1/users/status', async (req, res) => {
    let data = users.userStatus_put(req.body);

    if (data != null) {
        res.status(201).json({
            "message": "successfully changed."
        })
    }
    

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/users/register', async (req, res) => {
    let data = req.body;
    let result = await users.userStatus_get(data);
    result = result[0];

    console.log(result);

    if (result == null) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                res.status(401).json({
                    "message": err
                })
            }

            else {
                bcrypt.hash(data.password, salt, async (err, pswd) => {
                    if (err) {
                        res.status(401).json({
                            "message": err
                        })
                    }

                    else {
                        data.password = pswd
                        console.log(data);

                        let status = await users.userStatus_post(data);

                        if (status == true){
                            res.status(200).json({
                                "message": "successfully generated."
                            })
                        }

                        else {
                            res.status(401).json(
                                { "message": status }
                            )
                        }
                    }
                })
            }
        });

        
    }

    else {
        res.status(400).json({
            "message": "user already exist."
        })
    }
})

router.post('/api/v1/users/login', async (req, res) => {
    let user_vali = await users.userStatus_get(req.body);

    if (user_vali[0].id == req.body.id) {
        bcrypt.compare(req.body.password, user_vali[0].password, async (err, datas) => {
            if (err)
                return res.status(401).json(
                    { "message": err }
                )
            
            let data = jwt_query(req.body);

            user_vali[0].token = data;
            await users.userStatus_put(user_vali[0]);

            return res.status(200).json(
                {
                    "message": "successfully login.",
                    "token": data
                }
            )
        })
    }

    else {
        return res.status(401).json(
            { "message": "bad input parameter" }
        )
    }

    
    
})

router.post('/api/v1/users/logout', async (req, res) => {
    let data = req.body;
    if (data[0] == 0) {
        res.status(200).json({
            "message": "successfully generated."
        })
    }

    else {
        if (data[0] == 1) {
            res.status(400).json({
                "message": "bad input parameter"
            })
        }

        else {
            res.status(409).json({
                "message": "log-in first"
            })
        }
    }
})

module.exports = router;
