const path = require('path');
const multer = require ('multer');


const storage = multer.diskStorage({
    destination: (req, file, callaback) =>{
        callaback(null, './public/images/products')
    },
    filename : (req, file,callaback) =>{
        callaback(null, 'img-phone-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage
});

module.exports = upload;