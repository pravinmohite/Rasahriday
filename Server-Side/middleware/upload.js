const path = require('path');
const multer = require('multer');
const productImagesPath = 'productImages/';
const blogImagesPath = 'blogImages/';
var storage= multer.diskStorage({
    destination: function(req, file, cb) {
        console.log("====req=====", req.url);
        if(req.url !== '/blogssss') {
            cb(null, productImagesPath);
        } else {
            cb(null, blogImagesPath);
        }
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if(
            file.mimetype == 'image/png' || 
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
        ) {
            callback(null,true);
        }
        else {
            console.log('only png and jpg file supported!');
            callback(null,false)
        }
    }
})

module.exports = upload;