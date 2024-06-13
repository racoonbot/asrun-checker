const fs = require("fs");

const filePath = "/home/pppo/Документы/Mario/_code/AS_RUN-genertor/asrun.txt";
let lastPosition = 0;

function checkLogFile() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const newContent = data.slice(lastPosition);
    const lines = newContent.split("\n");

    lines.forEach((line) => {
      if (
        line.includes("RUNSHORT") ||
        line.includes("SKIPED") ||
        line.includes("MISSED") ||
        line.includes("LONG")
      ) {
        console.log(line); // Вывод строки с искомым словом в консоль
      }
    });

    lastPosition += newContent.length;
  });
}

setInterval(checkLogFile, 5000);
