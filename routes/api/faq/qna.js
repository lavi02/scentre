var Router =  require('express');
var faq = require('../../../models/db_qna');
var router = Router();

router.get('/api/v1/board/qna', (req, res) => {
    let data = faq.faq_get(req);
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

router.get('/api/v1/board/qna/{index}', (req, res) => {
    let data = faq.faq_get(req);
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

router.post('/api/v1/board/qna', (req, res) => {
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

router.delete('/api/v1/qna/{index}', (req, res) => {
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
