const { exec } = require('child_process');

function processVideo(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const command = `python3 run_model.py "${inputPath}" "${outputPath}"`;
    console.log(`Executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution Error: ${error.message}`);
        console.error(`Standard Error Output: ${stderr}`);
        return reject(error);
      }
      
      console.log(`Processing completed successfully.`);
      console.log(`Standard Output: ${stdout}`);
      resolve(outputPath);
    });
  });
}

module.exports = processVideo;
