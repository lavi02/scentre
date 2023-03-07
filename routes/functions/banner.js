var Router =  require('express');
var banner = require('../../models/db_main');
var router = Router();

router.get('/banner', async (req, res) => {
    let data = await banner.banner_get();

    
    if (data != null) {
        data_list = [
            data[0].banner[0].bannerLink,
            data[0].banner[1].bannerLink,
            data[0].banner[2].bannerLink,
            data[0].banner[3].bannerLink
        ]
        res.status(200).json(data_list)
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

module.exports = router;