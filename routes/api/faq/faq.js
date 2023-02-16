var Router =  require('express');
var faq = require('../../../models/db_faq');
var router = Router();
 
router.get('/api/v1/board/faq', (req, res) => {
    let data = faq.faq_get(req);
    if (data[0] == 0) {
        let index = 1;
        
        res.status(200).json({
            "index": index,
            "title": data.title,
            "contents": data.contents
        })

        index += 1;
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.get('/api/v1/board/faq/:index', (req, res) => {
    let data = faq.faq_get(req);
    if (data[0] == 0) {
        res.status(200).json({
            "data": data.contents,
            "files": data.files
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

router.post('/api/v1/board/faq', (req, res) => {
    let data = faq.faq_post(req);
    if (data == 0) {
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

router.delete('/api/v1/faq/:index', (req, res) => {
    let faq_data = faq.faq_delete(req);
    if (faq_data == 0) {
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
