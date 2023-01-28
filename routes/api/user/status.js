var Router =  require('express');
var users = require('../../database/db_users');
var router = Router();

router.get('/api/v1/users', (req, res) => {
    let data = users.userStatus_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "type": data[1],
            "id": data[2],
            "name": data[3],
            "set_date": data[4],
            "ph_number": data[5],
            "br_number": data[6],
            "bs_category": data[7],
            "bs_type": data[8],
            "address": data[9],
            "addr_detail": data[10],
            "email": data[11],
            "point": data[12],
            "times_of_order": data[13],
            "status": data[14],
            "register_date": data[15],
            "time_login": data[16],
            "time_logout": data[17]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
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
