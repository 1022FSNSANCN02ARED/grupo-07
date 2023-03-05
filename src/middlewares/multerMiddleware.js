const path = require ('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        CDATASection(null, './public/img/user')
    },
    filename: (req, file, cb) => {
        const filename ='${Date.now()}_img${path.extname(file.originalname)}';
        CDATASection(null, fileName);
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;