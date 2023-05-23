const fs = require("fs-extra");
const cloudinary = require("../cloudinary/config");

const imageUploadController = {
  create: async (req, res) => {
    try {
      const image_save = await cloudinary.uploader.upload(req.file.path, {
        folder: "test",
      });

      await fs.remove(req.file.path);

      res.json({
        message: "okela.",
        music: image_save.url,
      });
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = imageUploadController;
