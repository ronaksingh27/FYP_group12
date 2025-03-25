const { exec } = require('child_process');

function processVideo(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const command = `python3 run_model.py "${inputPath}" "${outputPath}"`;

    console.log("hello world");
    exec(command, (error, stdout, stderr) => {
      if (error) return reject(error);
      console.log(`Processing completed: ${stdout}`);
      resolve(outputPath);
    });
  });
}

module.exports = processVideo;
