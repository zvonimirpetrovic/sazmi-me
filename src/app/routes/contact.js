const express = require('express');
const router = express.Router();
const spawn = require("child_process").spawn;


router.post('/', function(req, res, next) {

  console.log(req)

  //Python
  let pythonProcess = spawn('python',["../assets/summarize.py", req.body.title, req.body.content]);

  pythonProcess.stdout.on('data', (data) => {
    console.log("aaaaaa", data);
    let summary = {
      title:this.data.substring(0, this.res.indexOf('.')),
      content: this.data.substring(this.res.indexOf('.'), this.res.lastIndexOf('.')),
      info: this.res.substring(this.res.lastIndexOf('.'), this.res.length - 1)
    }
          res.status(200).send(summary);
  });
});


module.exports = router;
