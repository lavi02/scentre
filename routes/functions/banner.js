var Router =  require('express');
var banner = require('../../models/db_main');
var router = Router();

router.get('/banner', async (req, res) => {
    let data = await banner.banner_get();

    
    if (data != null) {
        res.status(200).json({
            data: data[0].banner
        })
    }

    else {
        res.status(400).json({
            "message": "bad input parameter"
        })
    }
})

module.exports = router;