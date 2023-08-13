const express = require('express');

var app = express();
const router = express.Router();

const upload = require('../middleware/upload')

const QuestionType = require('../models/questionType');
const QuestionAnswer = require('../models/questionAnswer');
const Product = require('../models/product');
const Category = require('../models/category');
const Blogs = require('../models/blogs');//
const Gallery = require('../models/gallery');
const Login = require('../models/login');
const Cart = require('../models/cart');
const Order = require('../models/order');
const product = require('../models/product');
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



/*----crud for blogs data-----------------*/

router.get('/blogs', (req, res, next) => {
    //res.send('retrieving the question answer list');
    Blogs.find((err, blogsList) => {
        res.json(blogsList);
    })
})

router.post('/blogs', (req, res, next) => {
    //logic to add
    let newblogs = new Blogs({
        blogName: req.body.blogName,
        blogDesc: req.body.blogDesc
    })
    newblogs.save((err, blogs) => {
        if (err) {
            res.json({ msg: 'failed to add blogs' });
        }
        else {
            res.json({ msg: 'blogs added successfully' });
        }
    })
})

router.delete('/blogs/:id', (req, res, next) => {
    Blogs.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/blogs/:id', (req, res, next) => {
    Blogs.updateOne({ _id: req.params.id }, {
        $set: {
            blogsName: req.body.blogsName,
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

/* end crud for blogs */
//
/*----crud for gallery data-----------------*/

router.get('/gallery', (req, res, next) => {
    //res.send('retrieving the question answer list');
    Gallery.find((err, galleryList) => {
        res.json(galleryList);
    })
})

router.post('/gallery', (req, res, next) => {
    //logic to add
    let newgallery = new Gallery({
        galleryName: req.body.galleryName,
        galleryDescription: req.body.galleryDescription
    })
    newgallery.save((err, gallery) => {
        if (err) {
            res.json({ msg: 'failed to add gallery' });
        }
        else {
            res.json({ msg: 'gallery added successfully' });
        }
    })
})

router.delete('/gallery/:id', (req, res, next) => {
    Gallery.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/gallery/:id', (req, res, next) => {
    Gallery.updateOne({ _id: req.params.id }, {
        $set: {
            galleryName: req.body.galleryName,
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

/* end crud for gallery */
//
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
        productId: req.body.productId,
        userId: req.body.userId,
        userName: req.body.userName,
        userAddress: req.body.userAddress,
        userPhoneNumber: req.body.userPhoneNumber,
        productName: req.body.productName,
        productImages: req.body.productImages,
        description: req.body.description,
        quantity: req.body.quantity,
        stock: req.body.stock,
        price: req.body.price,
        slok: req.body.slok,
        dosage: req.body.dosage,
        indications: req.body.indications,
        contraIndications: req.body.contraIndications,
        sanskritName: req.body.sanskritName,
        botanicalName: req.body.botanicalName,
        drugQuantity: req.body.drugQuantity,
        cartAdditionDate: Date.now()
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

router.post('/multipleCartItems', (req, res, next) => {
    removeMultipleCartItems(req.body, res);
})



router.patch('/cart/:id', (req, res, next) => {
    Cart.updateOne({ _id: req.params.id }, {
        $set: {
            categoryId: req.body.categoryId,
            productId: req.body.productId,
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
        productId: req.body.productId,
        productName: req.body.productName,
        description: req.body.description,
        quantity: req.body.quantity,
        stock: req.body.stock,
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
        productId: req.body.productId,
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
        orderedDate: Date.now()
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

/*----to complete multiple order from cart---*/
router.post('/multipleOrder', (req, res, next) => {
    //logic to add

    for(let i=0;i<req.body.selectedItems.length;i++) {
        let reqBodySelectedItems = req.body.selectedItems;
        let newOrder = new Order({
            categoryId: reqBodySelectedItems[i].categoryId,
            productId: reqBodySelectedItems[i].productId,
            userId: reqBodySelectedItems[i].userId,
            userName: req.body.userName,
            userAddress: req.body.userAddress,
            userPhoneNumber: req.body.userPhoneNumber,
            productName: reqBodySelectedItems[i].productName,
            productImages: reqBodySelectedItems[i].productImages,
            description: reqBodySelectedItems[i].description,
            quantity: reqBodySelectedItems[i].quantity,
            price: reqBodySelectedItems[i].price,
            slok: reqBodySelectedItems[i].slok,
            dosage: reqBodySelectedItems[i].dosage,
            indications: reqBodySelectedItems[i].indications,
            contraIndications: reqBodySelectedItems[i].contraIndications,
            sanskritName: reqBodySelectedItems[i].sanskritName,
            botanicalName: reqBodySelectedItems[i].botanicalName,
            drugQuantity: reqBodySelectedItems[i].drugQuantity,
            orderedDate: Date.now()
        })
        newOrder.save((err, product) => {
            if (err) {
                res.json({ msg: 'failed to order with err:' + err });
            }
            else {
                if(i == reqBodySelectedItems.length-1) {
                  removeMultipleCartItems(reqBodySelectedItems, res);
                }
            }
        })
    }
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
            productId: req.body.productId,
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
            if(req.body.orderAccepted) {
                updateStockForProduct(req.body, res)
            }
            else {
               res.json(result);
            }
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
        productId: req.body.productId,
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

removeMultipleCartItems =(selectedItems, res)=> {
    for(let i=0;i< selectedItems.length; i++) {
        Cart.remove({ _id: selectedItems[i]._id }, (err, result) => {
            if (err) {
                res.json(err);
            }
            else {
                if(i == selectedItems.length-1) {
                  res.json(result);
                }
            }
        })
    }
}

findStockValueForProduct = async (product) =>{
    let result;
    await Product.find((err, productList) => {
           result = productList.filter(function (item) {
            if (product.productId === item.id) {
                return true;
            }
        });
    })
    if(result.length >0) {
        let stockResult= result[0].stock
        if(stockResult) {
           return stockResult
        }
    }
    return result;
}

updateStockForProduct =(product, res) => {
    //let stockValue = findStockValueForProduct(product);
    findStockValueForProduct(product).then((stockValue)=>{
        if(stockValue) {
            Product.updateOne({ _id: product.productId}, {
                $set: {
                    stock: stockValue - product.quantity,
                }
            }, (err, result) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(result);
                }
            });
        }
        else {
            res.json({ msg: 'failed to update stock details for product' });
        }
    })
 
}

module.exports = router;