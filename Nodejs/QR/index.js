import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    console.log("Generating QR code for:", url);

    // Generate QR image
    const qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    // Save URL text
    fs.writeFile("URL.txt", url, (err) => {
      if (err) {
        console.error("Error saving URL.txt:", err);
        return;
      }
      console.log("✅ The URL.txt file has been saved!");
    });
  })
  .catch((error) => {
    console.error("❌ Error:", error);
  });
