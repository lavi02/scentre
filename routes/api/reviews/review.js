var Router =  require('express');
var review = require('../../../models/db_review');
var router = Router();

router.get('/api/v1/review', async (req, res) => {
    let data = await review.review_get(req.body);
    console.log(data);

    if (data[0] != null) {
        let datas = []
        for (let i = 0; data.length; i++) {
            datas.push(data[i]);
        }
        res.status(200).json({
            data
        })
    }

    else {
        res.status(200).json({"message": "there is no datas."})
    }
})

router.post('/api/v1/board/review', async (req, res) => {
    let data = await review.review_post(req.body);
    if (data == true) {
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

router.delete('/api/v1/board/review', async (req, res) => {
    let data = await review.review_delete(req.body);
    if (data == 0) {
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

