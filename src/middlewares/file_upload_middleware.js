import multer from "multer";
import path from "path";

let storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "product_images/");
  },
  filename: (req, file, cb) => {
    let name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const uploadFile = multer({
  storage: storageConfig,
  //   fileFilter: (req, file, cb) => {
  //     if (file.mimetype == "image/png" || file.mimetype == "image.jpg") {
  //       cb(null, true);
  //     } else {
  //       console.log("Only jpg and png file supported");
  //       cb(null, false);
  //     }
  //   },
  //   limits: { fileSize: 1024 * 1024 * 2 },
});
export default uploadFile;
