const spawn = require("child_process").spawn;

module.exports = function encode(req, res) {



    const body = req.body;

    let pythonProcess = spawn('python',["./assets/summarize.py", req.body.title, req.body.content]);
    pythonProcess.stdout.on('data', (data) => {
      console.log('aaaaaaaaaa', data.toString())
      return res.status(200).send({ data: data.toString(), message: 'Your string was successfully encoded!' });
    });


}

function encoder(unEncodedString) {

  let encodedString = '';

  let count = 1;

  for (let i = 0; i < unEncodedString.length; i++) {
    const
      currentChar = unEncodedString.charAt(i),
      compareChar = unEncodedString.charAt(i+1);

    if(currentChar === compareChar)
    {
      count++;
    }
    else
    {
      encodedString += currentChar + count;

      count = 1;
    }
  }

  return encodedString;
}
