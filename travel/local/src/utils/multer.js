const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'))
  },
  filename: function (req, file, cb) {
    //   accept="image/png, image/jpeg, image/webp"
    const accept = ['.png', '.jpg', '.jpeg', '.webp'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (!accept.includes(fileExtension)) {
      return cb(new Error('Only image files are allowed!'));
    }
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    // image-3746384739490-3904
  }
})

const upload = multer({ storage: storage });
module.exports = upload;