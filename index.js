import express from 'express';
import consign from 'consign';

// var watson = require('watson-developer-cloud');
const app = express();

consign()
    .include('middlewares.js')
    .then('routes')
    .into(app)
