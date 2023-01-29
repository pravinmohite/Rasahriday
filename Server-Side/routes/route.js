const express = require('express');

var app = express();
const router = express.Router();

const upload = require('../middleware/upload')

const QuestionType = require('../models/questionType');
const QuestionAnswer = require('../models/questionAnswer');
const Product = require('../models/product');
const Category = require('../models/category');
const Login = require('../models/login');
const Cart = require('../models/cart');
const Order = require('../models/order');
let loginEndPoint = "/loginDetails";
let signUpEndPoint = "/signUp";

/*--------crud for login details-----------*/
router.get(loginEndPoint, (req, res, next) => {
    Login.find((err, existingCredentials) => {
        res.json(existingCredentials);
    })
})

router.post(loginEndPoint, (req, res, next) => {
    Login.find((err, existingCredentials) => {
        let result = existingCredentials.find(function (item) {
            if (req.body.username === item.username && req.body.password === item.password) {
                return item;
            }
        });
        if (!result || result.length == 0) {
            let item = {
                invalidUser: true
            }
            res.json(item);
        }
        else {
            res.json(result);
        }
    })
})


router.post(signUpEndPoint, (req, res, next) => {
    //logic to add
    let newLogin = new Login({
        username: req.body.username,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    })
    newLogin.save((err, questionType) => {
        if (err) {
            res.json({ msg: 'failed to add login details' });
        }
        else {
            res.json(req.body);
        }
    })
})

router.delete(loginEndPoint + '/:id', (req, res, next) => {
    Login.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch(loginEndPoint + '/:id', (req, res, next) => {
    Login.updateOne({ _id: req.params.id }, {
        $set: {
            username: req.body.username,
            password: req.body.password
        }
    }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
})

/*----crud for question types-----------------*/

router.get('/questionType', (req, res, next) => {
    QuestionType.find((err, questionTypes) => {
        res.json(questionTypes);
    })
})


router.post('/questionType', (req, res, next) => {
    //logic to add
    let newQuestionType = new QuestionType({
        questionType: req.body.questionType,
    })
    newQuestionType.save((err, questionType) => {
        if (err) {
            res.json({ msg: 'failed to add question type' });
        }
        else {
            res.json({ msg: 'question type added successfully' });
        }
    })
})

router.delete('/questionType/:id', (req, res, next) => {
    QuestionType.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/questionType/:id', (req, res, next) => {
    QuestionType.updateOne({ _id: req.params.id }, {
        $set: {
            questionType: req.body.questionType
        }
    }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
})

/*----crud for question answer-----------------*/

router.get('/questionAnswer', (req, res, next) => {
    //res.send('retrieving the question answer list');
    QuestionAnswer.find((err, questionAnswerList) => {
        res.json(questionAnswerList);
    })
})

router.post('/questionAnswer', (req, res, next) => {
    //logic to add
    let newQuestionAnswer = new QuestionAnswer({
        question: req.body.question,
        answer: req.body.answer,
        questionType: req.body.questionType,
        rank: req.body.rank

    })
    newQuestionAnswer.save((err, questionAnswer) => {
        if (err) {
            res.json({ msg: 'failed to add question answer' });
        }
        else {
            res.json({ msg: 'question answer added successfully' });
        }
    })
})

router.delete('/questionAnswer/:id', (req, res, next) => {
    QuestionAnswer.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/questionAnswer/:id', (req, res, next) => {

    QuestionAnswer.updateOne({ _id: req.params.id }, {
        $set: {
            question: req.body.question,
            answer: req.body.answer,
            questionType: req.body.questionType,
            rank: req.body.rank
        }
    }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });

});

//update question answer

/*----crud for products data-----------------*/

router.get('/productAll', (req, res, next) => {
    Product.find((err, productList) => {
        res.json(productList);
    })
})

router.get('/product', (req, res, next) => {
    if (!req.query.categoryId) {
        res.json(null);
    }
    else {
        Product.find((err, productList) => {
            let result = productList.filter(function (item) {
                if (req.query.categoryId === item.categoryId) {
                    return true;
                }
            });
            res.json(result);
        })
    }
})

//router.post('/product',(req,res,next)=>{
router.post('/product', upload.any(), function (req, res) {
    console.log('req files', req.files);

    let newProduct = new Product({
        categoryId: req.body.categoryId,
        productName: req.body.productName,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        shlok: req.body.shlok,
        references: req.body.references,
        dosage: req.body.dosage,
        indications: req.body.indications,
        contraIndications: req.body.contraIndications,
        sanskritName: req.body.sanskritName,
        botanicalName: req.body.botanicalName,
        drugQuantity: req.body.drugQuantity,
        stock: req.body.stock,
        date: req.body.date
    })
    if (req.files) {
        let path = '';
        req.files.forEach((files, index, arr) => {
            path += files.path + ',';
        });
        path = path.substring(0, path.lastIndexOf(','));
        newProduct.productImages = path;
    }
    newProduct.save((err, product) => {
        if (err) {
            res.json({ msg: 'failed to add product with err:' + err });
        }
        else {
            res.json({ msg: 'product added successfully' });
        }
    })
})

router.delete('/product/:id', (req, res, next) => {
    Product.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/product/:id', upload.any(), (req, res, next) => {
    let path = '';
    if (req.files && req.files.length > 0) {
        req.files.forEach((files, index, arr) => {
            path += files.path + ',';
        });
        path = path.substring(0, path.lastIndexOf(','));
    }
    Product.updateOne({ _id: req.params.id }, {
        $set: {
            categoryId: req.body.categoryId,
            productName: req.body.productName,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            shlok: req.body.shlok,
            references: req.body.references,
            dosage: req.body.dosage,
            indications: req.body.indications,
            contraIndications: req.body.contraIndications,
            sanskritName: req.body.sanskritName,
            botanicalName: req.body.botanicalName,
            drugQuantity: req.body.drugQuantity,
            stock: req.body.stock,
            date: req.body.date,
            productImages: path?path: req.body.productImages
        }
    }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });

});

/* end crud for product data --*/

/*----crud for category data-----------------*/

router.get('/category', (req, res, next) => {
    //res.send('retrieving the question answer list');
    Category.find((err, categoryList) => {
        res.json(categoryList);
    })
})

router.post('/category', (req, res, next) => {
    //logic to add
    let newCategory = new Category({
        categoryName: req.body.categoryName,
    })
    newCategory.save((err, category) => {
        if (err) {
            res.json({ msg: 'failed to add category' });
        }
        else {
            res.json({ msg: 'category added successfully' });
        }
    })
})

router.delete('/category/:id', (req, res, next) => {
    Category.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/category/:id', (req, res, next) => {
    Category.updateOne({ _id: req.params.id }, {
        $set: {
            categoryName: req.body.categoryName,
        }
    }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

/* end crud for Category */

/*---crud for cart data ---*/

/*--cart for user--*/

router.get('/cart/:userId', (req, res, next) => {
    //res.send('retrieving the question answer list');
    Cart.find((err, cartList) => {
        let result = cartList.filter(function (item) {
            if (req.params.userId === item.userId) {
                return true;
            }
        });
        res.json(result);
    })
});

router.post('/cart', (req, res, next) => {
    //logic to add
    let newCart = new Cart({
        categoryId: req.body.categoryId,
        userId: req.body.userId,
        userName: req.body.userName,
        userAddress: req.body.userAddress,
        userPhoneNumber: req.body.userPhoneNumber,
        productName: req.body.productName,
        productImages: req.body.productImages,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        slok: req.body.slok,
        dosage: req.body.dosage,
        indications: req.body.indications,
        contraIndications: req.body.contraIndications,
        sanskritName: req.body.sanskritName,
        botanicalName: req.body.botanicalName,
        drugQuantity: req.body.drugQuantity,
    })
    newCart.save((err, product) => {
        if (err) {
            res.json({ msg: 'failed to add cart with err:' + err });
        }
        else {
            res.json({ msg: 'product added to cart successfully' });
        }
    })
})

router.delete('/cart/:id', (req, res, next) => {
    Cart.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/cart/:id', (req, res, next) => {
    Cart.updateOne({ _id: req.params.id }, {
        $set: {
            categoryId: req.body.categoryId,
            userId: req.body.userId,
            userName: req.body.userName,
            userAddress: req.body.userAddress,
            userPhoneNumber: req.body.userPhoneNumber,
            productImages: req.body.productImages,
            productName: req.body.productName,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            slok: req.body.slok,
            dosage: req.body.dosage,
            indications: req.body.indications,
            contraIndications: req.body.contraIndications,
            sanskritName: req.body.sanskritName,
            botanicalName: req.body.botanicalName,
            drugQuantity: req.body.drugQuantity,
        }
    }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

/*----cart for admin---*/
router.get('/cartAll', (req, res, next) => {
    //res.send('retrieving the question answer list');
    Cart.find((err, cartList) => {
        res.json(cartList);
    })
})

router.post('/cartAll', (req, res, next) => {
    //logic to add
    let newCart = new Cart({
        categoryId: req.body.categoryId,
        productName: req.body.productName,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        slok: req.body.slok,
        dosage: req.body.dosage,
        indications: req.body.indications,
        contraIndications: req.body.contraIndications,
        sanskritName: req.body.sanskritName,
        botanicalName: req.body.botanicalName,
        drugQuantity: req.body.drugQuantity,
    })
    newCart.save((err, product) => {
        if (err) {
            res.json({ msg: 'failed to add cart with err:' + err });
        }
        else {
            res.json({ msg: 'product added to cart successfully' });
        }
    })
})

/*----crud end for cart data----*/


/*---crud for Order data ---*/

/*--Order for user--*/

router.get('/order/:userId', (req, res, next) => {
    Order.find((err, orderList) => {
        let result = orderList.filter(function (item) {
            if (req.params.userId === item.userId) {
                return true;
            }
        });
        res.json(result);
    })
});

router.post('/order', (req, res, next) => {
    //logic to add
    let newOrder = new Order({
        categoryId: req.body.categoryId,
        userId: req.body.userId,
        userName: req.body.userName,
        userAddress: req.body.userAddress,
        userPhoneNumber: req.body.userPhoneNumber,
        productName: req.body.productName,
        productImages: req.body.productImages,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        slok: req.body.slok,
        dosage: req.body.dosage,
        indications: req.body.indications,
        contraIndications: req.body.contraIndications,
        sanskritName: req.body.sanskritName,
        botanicalName: req.body.botanicalName,
        drugQuantity: req.body.drugQuantity,
    })
    newOrder.save((err, product) => {
        if (err) {
            res.json({ msg: 'failed to order with err:' + err });
        }
        else {
            res.json({ msg: 'product ordered successfully' });
        }
    })
})

router.delete('/order/:id', (req, res, next) => {
    Order.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/order/:id', (req, res, next) => {
    Order.updateOne({ _id: req.params.id }, {
        $set: {
            categoryId: req.body.categoryId,
            userId: req.body.userId,
            userName: req.body.userName,
            userAddress: req.body.userAddress,
            userPhoneNumber: req.body.userPhoneNumber,
            productImages: req.body.productImages,
            productName: req.body.productName,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            slok: req.body.slok,
            dosage: req.body.dosage,
            indications: req.body.indications,
            contraIndications: req.body.contraIndications,
            sanskritName: req.body.sanskritName,
            botanicalName: req.body.botanicalName,
            drugQuantity: req.body.drugQuantity,
            orderAccepted: req.body.orderAccepted
        }
    }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

/*----order for admin---*/
router.get('/orderAll', (req, res, next) => {
    Order.find((err, cartList) => {
        res.json(cartList);
    })
})

router.post('/orderAll', (req, res, next) => {
    //logic to add
    let newOrder = new Order({
        categoryId: req.body.categoryId,
        productName: req.body.productName,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        slok: req.body.slok,
        dosage: req.body.dosage,
        indications: req.body.indications,
        contraIndications: req.body.contraIndications,
        sanskritName: req.body.sanskritName,
        botanicalName: req.body.botanicalName,
        drugQuantity: req.body.drugQuantity,
    })
    newOrder.save((err, product) => {
        if (err) {
            res.json({ msg: 'failed to order with err:' + err });
        }
        else {
            res.json({ msg: 'product ordered successfully' });
        }
    })
})

/*----LandingPage---*/
router.get('/landingPageDetails', (req, res, next) => {
    Product.find((err, productList) => {
        res.json(productList);
    })
})

/*------get one product from each category----*/
router.get('/productPerCategory',(req, res, next) => {
    Product.find((err, productList) => {
        let obj={};
        let resultArr=[];
        productList.map(data=>{
            if(!obj[data.categoryId] && data.productImages && data.productImages!="") {
                 resultArr.push(data);
                 obj[data.categoryId]=true;
            }
        })
        res.json(resultArr);
    })
})

module.exports = router;