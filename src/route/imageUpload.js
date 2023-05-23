const imageUploadController = require("../controller/imageUploadController");
const upload = require("../middleware/upload");

const router = require("express").Router();

router.post("/create", upload.single("url"), imageUploadController.create);



module.exports = router;
