import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";
let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename).concat("\\harrybhaiNode\\ClearClutters");
fs.readdir(__dirname, (err, files) => {
  if (!err) {
    files.forEach((i) => {
      let value = path.extname(i).split(".")[1];
      let oldPath = __dirname.concat(`\\${i}`);
      let newPath = __dirname.concat(`\\${value}\\${i}`);
      fs.moveSync(oldPath, newPath, { overwrite: true });
    });
  }
});