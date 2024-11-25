const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.pem')),
};

app.use(express.static(path.join(__dirname, 'public')));

https.createServer(options, app).listen(PORT, () => {
    console.log(`Secure server is running at https://localhost:${PORT}`);
});
