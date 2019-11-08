const spawn = require("child_process").spawn;

module.exports = function encode(req, res) {

  const body = req.body;

  let pythonProcess = spawn('python',["./assets/summarize.py", body.title, body.content]);
    pythonProcess.stdout.on('data', (data) => {

      // Converting passed data to string
      newData = data.toString();

      // Passing JSON object to frontend
      let summary = {
        title: body.title,
        content: newData.replace(body.title, '').replace(newData.substring(newData.lastIndexOf('Original Length'), newData.length - 1), ""),
        info: newData.substring(newData.lastIndexOf('Original Length'), newData.length - 1)
      }
      console.log("aaaa", summary["content"]);
      return res.status(200).send(summary);
    }
  );
}