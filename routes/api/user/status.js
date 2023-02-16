var Router =  require('express');
var users = require('../../../models/db_users');
var router = Router();

router.get('/api/v1/users', (req, res) => {
    let data = users.userStatus_get(req.body);
    if (data != null) {
        res.status(200).json({
            "type": data.type,
            "id": data.id,
            "name": data.name,
            "set_date": data.set_date,
            "ph_number": data.ph_number,
            "br_number": data.br_number,
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

router.get('/api/v1/users/check_id', (req, res) => {
    let data = users.userStatus_get(req.body);

    if (data[1] != null)
        res.status(200).json(
            { "message": "Doesn't match" }
        )
    else if (data[1] == null) {
        res.status(409).json(
            { "message": "already used ID" }
        )
    } else {
        res.status(400).json(
            { "message": "invalid input" }
        )
    }
})

router.get('/api/v1/users/find_acc', (req, res) => {
    let data = users.userStatus_get(req.body);
    if (req.body.type == "ID") {
        if (data[0] == 0) {
            res.status(200).json(
                { "user_id": data[1].user_id }
            )
        } else {
            if ((req.body.name == data[1].user_name && req.body.email == data[1].user_email)) {
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
        if (data[0] == 0) {
            res.status(200).json(
                { "user_ex_pswd": data[1].user_email }
            )
        } else {
            if ((req.body.name == data[1].user_name && req.body.email == data[1].user_email)) {
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

router.put('/api/v1/users/status', (req, res) => {
    let data = req.body;
    if (typeof(data.str) == "String" && typeof(data.img) == "String") {
        let result = users.userStatus_get(data);

        if (result[0] == 0) {
            res.status(201).json({
                "message": "successfully changed."
            })
        }
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/users/register', (req, res) => {
    let data = req.body;
    let result = users.userStatus_get(data);

    if (data[0] == 0) {
        res.status(200).json({
            "message": "successfully generated."
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/users/login', (req, res) => {
    let data = req.body;
    if (data[0] == 0) {
        res.status(200).json({
            "message": "successfully generated."
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/users/logout', (req, res) => {
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

router.get('/api/v1/users/check_id', (req, res) => {
    let data = req.body;
    if (data[0] == 0) {
        res.status(200).json({
            "message": "Doesn't match"
        })
    }

    else {
        if (data[0] == 1) {
            res.status(400).json({
                "message": "invalid input"
            })
        }

        else {
            res.status(409).json({
                "message": "already used ID"
            })
        }
    }
})

router.post('/api/v1/users/find_acc', (req, res) => {
    let data = req.body;
    if (data[0] == 0) {
        res.status(200).json({
            "message": "Doesn't match"
        })
    }

    else {
        if (data[0] == 1) {
            res.status(400).json({
                "message": "invalid input"
            })
        }

        else {
            res.status(409).json({
                "message": "already used ID"
            })
        }
    }
})

module.exports = router;
