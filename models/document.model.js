const mongoose = require('mongoose');

var documentSchema = new mongoose.Schema({
    count:{
        type: String,
    },
    fullName: {
        type: String,
        required: "จำเป็นต้องใส่ข้อมูล"
    },
    date: {
        type: String,
    },
    time: {
        type: String
    },
    typeCustomer: {
        type: String
    },
    total: {
        type: String
    },
    slipNumber: {
        type: String
    }
});


mongoose.model('Document', documentSchema);
