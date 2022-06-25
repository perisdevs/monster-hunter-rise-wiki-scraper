import * as https from 'https';
import { Requests } from './consts.js';

Requests.forEach((request) => {
  const req = https.request(request.options, request.response);

  req.on('error', error => {
    console.error(error);
  });
  
  req.end();
});

