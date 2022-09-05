import * as dotenv from 'dotenv';
import express from 'express';
import https from 'https';
import fs from 'fs';

const app = express();

dotenv.config();

const options = {
  key: fs.readFileSync('./ssl/localhost-key.pem'),
  cert: fs.readFileSync('./ssl/localhost.pem'),
};

https.createServer(options, app).listen(process.env.PORT || 4400, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
