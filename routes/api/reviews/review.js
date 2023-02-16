var Router =  require('express');
var users = require('../../../models/db_review');
var router = Router();

router.get('/api/v1/board/review', (req, res) => {
    let data = users.userStatus_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "index": data[1],
            "title": data[2]
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/board/review', (req, res) => {
    let data = req.body;
    if (data[0] == 0) {
        res.status(201).json({
            "message": "successfully generated."
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.delete('/api/v1/board/review', (req, res) => {
    let data = req.body;
    if (data[0] == 0) {
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

