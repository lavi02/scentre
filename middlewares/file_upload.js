const util = require("util");
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');
const collection = require("../controllers/mg_collection");

let image_storage = new GridFsStorage({
    URL: 'mongodb://3.38.11.171:27017/scentre_db',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
            };
        resolve(fileInfo);
        })
    }
})

let upload = multer({ image_storage }).single('file');
exports.uploadMiddleWare = util.promisify(upload);