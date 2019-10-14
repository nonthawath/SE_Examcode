const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DocumentDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connect Succeeded ... ') }
    else { console.log('Error in DB connection: ' + err) }
});

require('./document.model')
