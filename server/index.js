var express = require('express');
var app = express();
var useragent = require('express-useragent');
var path = require('path')

app.use(useragent.express());

app.use(express.static(path.join(__dirname, './build')));

app.get('/', function(req, res) {
  if(req.useragent.isMobile) {
    res.sendFile(path.join(__dirname, './html', 'mobile.html'))
  } 
  else {
    res.sendFile(path.join(__dirname, './html', 'desktop.html'))
  }
  
});
app.listen(3000);
