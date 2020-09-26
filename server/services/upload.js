const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Get access details
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const bucketName = process.env.BUCKET_NAME;

aws.config.update({
    secretAccessKey: secretAccessKey,
    accessKeyId: accessKeyId
});
const s3 = new aws.S3();

// Filter only image
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
}

// Upload and return public url
const upload = multer({
    fileFilter,
    storage: multerS3({
        s3,
        bucket: bucketName,
        acl: 'public-read',
        key: function (req, file, cb) {
            const nameFile = file.originalname.split(".");
            const typeFile = nameFile[nameFile.length - 1].toLocaleLowerCase();

            cb(null, Date.now().toString() + '.' + typeFile)
        }
    })
});

const deleteFile = async (key) => {
    if (key == null || key == "") {
        return false;
    }

    var params = {
        Bucket: bucketName,
        Key: key
    };

    return await s3.deleteObject(params, function (err, data) {
        // an error occurred
        if (err) { return false; }
        // successful response
        else { return false; }
    });
};

module.exports = { upload, deleteFile };