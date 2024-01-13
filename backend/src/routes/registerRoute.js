const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const registerRouter = express();
registerRouter.use(bodyParser.json());
registerRouter.use(bodyParser.urlencoded({ extended: true }));
registerRouter.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/postFilename'), function (error, success) {
            if (error) {
                console.log('Este foi o erro:', error);
            }
        });

    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log('Este foi o erro:', error);
            }
        })

        return name


    }
});

const upload = multer({ storage: storage });

const registerController = require('../controllers/registerController');

const fields = [
    { name: 'fileResume', maxCount: 1 }
];

registerRouter.post('/create-register', upload.fields(fields), registerController.createRegister);
registerRouter.get('/get-register', registerController.getRegister);
registerRouter.get('/delete-register/:id', registerController.deleteRegister)
registerRouter.post('/update-register', upload.single('fileResume'), registerController.updateRegister);

module.exports = registerRouter;