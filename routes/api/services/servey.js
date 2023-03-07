var Router =  require('express');
var servey = require('../../../models/db_servey');
var router = Router();

router.get('/api/v1/services/servey', (req, res) => {
    let data = servey.servey_get(req.body);
    try {
        if (data != null) {
            res.status(200).json(data[0])
        }

        else {
            res.status(401).json({
                "message": "there is no datas for the user."
            })
        }
    }

    catch (err) {
        res.status(400).json({
            "message": err
        })
    }
})

router.post('/api/v1/services/servey', (req, res) => {
    let data = req.body;
    let result = servey.servey_post(data);
    try {
        if (result == 0) {
            res.status(200).json({
                "message": "successfully generated."
            })
        }

        else {
            res.status(400).json({
                "message": "bad input parameter"
            })
        }
    }
    
    catch (err) {
        res.status(400).json({
            "message": err
        })
    }
})

router.put('/api/v1/services/servey', (req, res) => {
    let data = req.body;
    try {
        let result = servey.servey_put(data);

        if (result == 0) {
            res.status(200).json({
                "message": "successfully generated."
            })
        }

        else {
            res.status(400).json({
                "message": "bad input parameter"
            })
        }
    }

    catch (err) {
        res.status(400).json({
            "message": err
        })
    }
})

router.delete('/api/v1/services/servey', (req, res) => {
    let data = servey.servey_delete(req.body);
    if (data != null) {
        res.status(200).json({
            "message": "successfully removed."
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

module.exports = router;
