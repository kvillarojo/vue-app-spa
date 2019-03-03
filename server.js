const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

const indexHtML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.use('/dist', express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

app.get('*', (reg,res) => {
  res.write(indexHtML);
  res.end();
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})