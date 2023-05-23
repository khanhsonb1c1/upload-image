var express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const imageUpload = require("./route/imageUpload");




app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/image", imageUpload);



app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});