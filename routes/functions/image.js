var Router =  require('express');
var fs = require('fs');
var router = Router();
const images = require("../../middlewares/file_upload");
const db_data = require('../../controllers/mg_collection');

router.post('/api/v1/upload/:username/:target', images.image_storage.array('image', 10), async (req, res) => {
    if (req.files === undefined) {
        res.status(400).json({
            "message": "bad input parameters."
        })
    }
    else {
        try {
            let files_data = [];
            for (let i = 0; i < req.files.length; i++) {
                let titles = req.files[i].originalname;

                files_data.push(
                    { 
                        title: titles,
                        user_name: req.params.username,
                        path: req.params.target
                    }
                );
            }

            console.log(files_data);

            db_data.scentre_file_upload.insertMany(files_data).then(
                () => {
                    res.status(200).json({
                        "message": "successfully generated."
                    })
                }
            ).catch((err) => {
                res.status(401).json({
                    "message": err
                })
            })
        } catch (err) {
            res.status(401).json({
                "message": err
            })
        }
    }
})

module.exports = router;