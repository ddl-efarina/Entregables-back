import express from 'express';

const app = express();

app.use(express.static("public"));

app.get('/productos/list', (req, res) => {
    
});