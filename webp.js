var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./public/content/images/",            // Output folder
  PNGImages = "./public/content/images/*.png",         // PNG images
  JPEGImages = "./public/content/images/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 75 // Quality setting from 0 to 100
  })]
});