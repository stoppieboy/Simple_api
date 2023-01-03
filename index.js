const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = 8080;

const indexRoute = require('./routes/name')

app.use(logger('dev'));
// app.use(cors)
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json())
app.use('/',indexRoute);
app.use('*', (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'API endpoint doesnt exist'
    })
});

app.listen(PORT, (err) => {
    if(!err){
        console.log(`server listening on port: ${PORT}`);
    }else{
        console.log(err);
    }
})