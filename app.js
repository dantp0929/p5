const express = require('express')
const app = express()
const port = 25565

app.get(`/`, (req, res) => res.sendFile(__dirname + `/index.html`))

app.get(/^(.+)$/, function(req, res) {
  console.log(`static file require: ` + req.params);
  res.sendFile(__dirname + req.params[0]);
});

app.listen(port, () => console.log(`app on port ${port}!`))

