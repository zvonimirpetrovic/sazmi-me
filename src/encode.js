const spawn = require("child_process").spawn;

module.exports = function encode(req, res) {

  const body = req.body;

  let pythonProcess = spawn('python',["./assets/summarize.py", body.title, body.content]);
    pythonProcess.stdout.on('data', (data) => {
      console.log('lolololoaaaaaaaaaa', data.toString());
      console.log("blaaaaa", body.title)
      newData = data.toString();
      let summary = {
        title: body.title,
        content: newData.replace(body.title, '').substring(0, newData.lastIndexOf('Original Length')),
        info: newData.substring(newData.lastIndexOf('Original Length'), newData.length - 1)
      }
      return res.status(200).send(summary);
    }
  );
}