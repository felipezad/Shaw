var express = require('express')
var app = express()
var path = require('path')


app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/app/palindrome/index.html'));

})

app.get('/:palindrome', function(req,res){
  var str = req.params.palindrome
  var result = checkPalindrom(str)
  if(result)
    res.sendStatus(200)
  res.sendStatus(400)


})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}
