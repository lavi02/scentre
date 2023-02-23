const util = require("util");
const multer = require("multer");
const storage = require("multer-gridfs-storage");

let image_storage = new storage({
    URL: 'mongodb://13.125.174.232:27017/scentre_db',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            // for thumbnail and profile image
            if (req.baseUrl === '/api/v1/users') {
                return {
                    bucketName: 'user-images',
                    filename: `${req.id}-profile`
                };
            } 
            else if(req.baseUrl === '/api/v1/brand') {
                const { detail } = req;
                const { reportedDate } = detail;
                return {
                    bucketName: 'brand-images',
                    filename: `${reportedDate}-thumbnail`
                }
            }
        } else {
            // expecting only pdf, docx, txt, ... -> portfolio
            return {
                bucketName: 'files',
                filename: `${req.id}-${file.originalname}`
            };
        }
    }
})

let upload = multer({ storage: image_storage }).single('file');
exports.uploadMiddleWare = util.promisify(upload);