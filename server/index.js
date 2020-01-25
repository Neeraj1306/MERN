const express = require('express');
const app =express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://neer:qwerty123@cluster0-ra3yy.mongodb.net/test?retryWrites=true&w=majority', 
        {useNewUrlParser: true}).then(() => console.log('DB connected'))
                                .catch(err => console.log(err));

app.get('/',(req,res) => {
    res.send('hello world');
})

app.listen(5000, ()=>{
    console.log('listening on port 5000');
});

