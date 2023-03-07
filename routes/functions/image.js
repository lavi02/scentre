var Router =  require('express');
var router = Router();
const images = require("../../middlewares/file_upload");
const db_data = require('../../controllers/mg_collection');
const multer = require("multer");

router.post('/api/v1/upload', images.image_storage.single('image'), (req, res) => {
    console.log(req.file.originalname + Date.now().toString());
    if (req.file === undefined)
        res.status(400).json({
            "message": "bad input parameters."
        })
    else {
        const image_uri = new db_data.scentre_file_upload(
        {
            'title': req.file.originalname,
            'path': './uploads/'
        })

        image_uri.save().then(
            res.status(200).json({
            "message": "successfully generated."
            })
        ).catch((err) => {
            res.status(400).json({
            "message": err
            })
        })    
    }
})

module.exports = router;