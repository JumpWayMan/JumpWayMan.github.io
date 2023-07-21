const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

app.get('/capture', function (req, res) {
  res.redirect('capture.html');
});

app.get('/unity_webgl', function (req, res) {
  res.redirect('unity_webgl.html');
});

// 監聽 port

const port = process.env.port || 3000;
console.log('listening 3000...');
app.listen(port);