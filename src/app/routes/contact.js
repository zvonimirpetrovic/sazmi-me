const express = require('express');
const router = express.Router();
const spawn = require("child_process").spawn;


router.post('/', function(req, res, next) {

  console.log(req)

  //Python
  let pythonProcess = spawn('python',["../assets/summarize.py", req.body.title, req.body.content]);

  pythonProcess.stdout.on('data', (data) => {
          console.log(data.toString())
          res.status(200).send(data);
  });
});

module.exports = router;
