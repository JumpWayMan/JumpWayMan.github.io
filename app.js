const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

app.get('/lvLab_Box', function (req, res) {
  res.redirect('lvLab_Box.html');
});

app.get('/lvLab_kriel', function (req, res) {
  res.redirect('lvLab_kriel.html');
});

app.get('/simu', function (req, res) {
  res.redirect('simu.html');
});

app.get('/test', function (req, res) {
  res.redirect('test.html');
});


app.get('/capture', function (req, res) {
  res.redirect('capture.html');
});

app.get('/unity_webgl', function (req, res) {
  res.redirect('unity_webgl.html');
});

app.get('/unity_webgl_arProject', function (req, res) {
  res.redirect('unity_webgl_arProject.html');
});

app.get('/arjs_image', function (req, res) {
  res.redirect('arjs_image.html');
});

// 監聽 port

const port = process.env.port || 3000;
console.log('listening 3000...');
app.listen(port);