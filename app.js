const express = require('express');
const path = require('path');

const app = express();

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, 'temp/templatemo_552_video_catalog/index.html')
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is started on port ${port} `);
});
