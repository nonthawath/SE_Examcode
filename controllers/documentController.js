const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Document = mongoose.model('Document');





router.get('/', (req, res) => {
    res.render('document/showOrEdit');
});

// edit
router.get('/edit', (req, res) => {
    res.render('document/edit');
});

// call update 
router.post('/', (req, res) => {
    updateRecord(req,res);
});

//for update
function updateRecord(req, res) {
    Document.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('document/list'); }
    });
}



// ########## ALL ############# //
router.get('/list', (req, res) => {
    Document.find((err, docs) => {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลการเข้าใช้สระทั้งหมด",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

// list see all 2559
router.get('/list2559', (req, res) => {
    Document.find( { "date": { "$regex": "/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลการเข้าใช้สระประจำปี 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

// list see all 2560
router.get('/list2560', (req, res) => {
    Document.find( { "date": { "$regex": "/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลการเข้าใช้สระประจำปี 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

// list see all 2561
router.get('/list2561', (req, res) => {
    Document.find( { "date": { "$regex": "/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลการเข้าใช้สระประจำปี 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});





// ############################################# 2559 ######################################## //

// มกราคม
router.get('/list1', (req, res) => {
    Document.find( { "date": { "$regex": "/1/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มกราคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

// กุมภาพันธ์
router.get('/list2', (req, res) => {
    Document.find( { "date": { "$regex": "/2/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กุมภาพันธ์ 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//มีนาคม
router.get('/list3', (req, res) => {
    Document.find( { "date": { "$regex": "/3/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มีนาคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//เมษายน
router.get('/list4', (req, res) => {
    Document.find( { "date": { "$regex": "/4/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน เมษายน 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//พฤษภาคม 
router.get('/list5', (req, res) => {
    Document.find( { "date": { "$regex": "/5/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน พฤษภาคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//มิถุนายน
router.get('/list6', (req, res) => {
    Document.find( { "date": { "$regex": "/6/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มิถุนายน 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//กรกฎาคม
router.get('/list7', (req, res) => {
    Document.find( { "date": { "$regex": "/7/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กรกฎาคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//สิงหาคม
router.get('/list8', (req, res) => {
    Document.find( { "date": { "$regex": "/8/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน สิงหาคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//กันยายน
router.get('/list9', (req, res) => {
    Document.find( { "date": { "$regex": "/9/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กันยายน 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//ตุลาคม
router.get('/list10', (req, res) => {
    Document.find( { "date": { "$regex": "/10/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน ตุลาคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//พฤษจิกายน
router.get('/list11', (req, res) => {
    Document.find( { "date": { "$regex": "/11/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน พฤษจิกายน 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});

//ธันวาคม
router.get('/list12', (req, res) => {
    Document.find( { "date": { "$regex": "/12/2559", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน ธันวาคม 2559",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  list :' + err);
        }
    });
});


// ############################################# 2560 ######################################## //

// มกราคม

router.get('/list13', (req, res) => {
    Document.find( { "date": { "$regex": "/1/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มกราคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

// กุมภาพันธ์

router.get('/list14', (req, res) => {
    Document.find( { "date": { "$regex": "/2/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กุมภาพันธ์ 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//มีนาคม
router.get('/list15', (req, res) => {
    Document.find( { "date": { "$regex": "/3/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มีนาคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//เมษายน
router.get('/list16', (req, res) => {
    Document.find( { "date": { "$regex": "/4/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน เมษายน 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//พฤษภาคม 
router.get('/list17', (req, res) => {
    Document.find( { "date": { "$regex": "/5/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน พฤษภาคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//มิถุนายน
router.get('/list18', (req, res) => {
    Document.find( { "date": { "$regex": "/6/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มิถุนายน 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//กรกฎาคม
router.get('/list19', (req, res) => {
    Document.find( { "date": { "$regex": "/7/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กรกฎาคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//สิงหาคม
router.get('/list20', (req, res) => {
    Document.find( { "date": { "$regex": "/8/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน สิงหาคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//กันยายน
router.get('/list21', (req, res) => {
    Document.find( { "date": { "$regex": "/9/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กันยายน 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//ตุลาคม
router.get('/list22', (req, res) => {
    Document.find( { "date": { "$regex": "/10/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน ตุลาคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//พฤษจิกายน
router.get('/list23', (req, res) => {
    Document.find( { "date": { "$regex": "/11/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน พฤษจิกายน 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//ธันวาคม
router.get('/list24', (req, res) => {
    Document.find( { "date": { "$regex": "/12/2560", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน ธันวาคม 2560",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

// ############################################# 2561 ######################################## //

// มกราคม

router.get('/list25', (req, res) => {
    Document.find( { "date": { "$regex": "/1/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มกราคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

// กุมภาพันธ์

router.get('/list26', (req, res) => {
    Document.find( { "date": { "$regex": "/2/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กุมภาพันธ์ 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//มีนาคม
router.get('/list27', (req, res) => {
    Document.find( { "date": { "$regex": "/3/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มีนาคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//เมษายน
router.get('/list28', (req, res) => {
    Document.find( { "date": { "$regex": "/4/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน เมษายน 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//พฤษภาคม 
router.get('/list29', (req, res) => {
    Document.find( { "date": { "$regex": "/5/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน พฤษภาคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//มิถุนายน
router.get('/list30', (req, res) => {
    Document.find( { "date": { "$regex": "/6/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน มิถุนายน 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//กรกฎาคม
router.get('/list31', (req, res) => {
    Document.find( { "date": { "$regex": "/7/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กรกฎาคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//สิงหาคม
router.get('/list32', (req, res) => {
    Document.find( { "date": { "$regex": "/8/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน สิงหาคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//กันยายน
router.get('/list33', (req, res) => {
    Document.find( { "date": { "$regex": "/9/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน กันยายน 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//ตุลาคม
router.get('/list34', (req, res) => {
    Document.find( { "date": { "$regex": "/10/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน ตุลาคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//พฤษจิกายน
router.get('/list35', (req, res) => {
    Document.find( { "date": { "$regex": "/11/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน พฤษจิกายน 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});

//ธันวาคม
router.get('/list36', (req, res) => {
    Document.find( { "date": { "$regex": "/12/2561", "$options": "i" } }, function (err, docs) {
        if (!err) {
            res.render("document/list", {
                viewTitle: "ข้อมูลประจำเดือน ธันวาคม 2561",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving list :' + err);
        }
    });
});



//for Update 
router.get('/:id', (req, res) => {
    Document.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("document/edit", {
                viewTitle: "แก้ไขข้อมูล" ,
                document: doc
            });
        }
    });
});

//for delete
router.get('/delete/:id', (req, res) => {
    Document.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/document/list');
        }
        else { console.log('Error in list delete :' + err); }
    });
});




module.exports = router;