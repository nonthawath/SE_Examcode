const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Document = mongoose.model('Document');


var test = '';


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
        if (!err) { res.redirect('document/' + test); }
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
            test = 'list1'
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
            test = 'list2'
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
            test = 'list3'
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
            test = 'list4'
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
            test = 'list5'
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
            test = 'list6'
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
            test = 'list7'
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
            test = 'list8'
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
            test = 'list9'
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
            test = 'list10'
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
            test = 'list11'
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
            test = 'list12'
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
            test = 'list13'
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
            test = 'list14'
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
            test = 'list15'
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
            test = 'list16'
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
            test = 'list17'
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
            test = 'list18'
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
            test = 'list19'
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
            test = 'list20'
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
            test = 'list21'
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
    test = 'list22'
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
    test = 'list23'
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
    test = 'list24'
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
    test = 'list25'
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
    test = 'list26'
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
    test = 'list27'
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
    test = 'list28'
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
    test = 'list29'
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
    test = 'list30'
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
    test = 'list31'
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
    test = 'list32'
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
    test = 'list33'
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
    test = 'list34'
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
    test = 'list35'
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
    test = 'list36'
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