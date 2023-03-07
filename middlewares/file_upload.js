const multer = require("multer");
const path = require('path');

exports.image_storage = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, './uploads/');
        },

        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + '_' + Date.now() + '_' + ext);
        }
    })
});