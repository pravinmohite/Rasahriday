const express=require('express');
const router=express.Router();

const QuestionType=require('../models/questionType');
const QuestionAnswer=require('../models/questionAnswer');
const Product= require('../models/product');
const Category= require('../models/category');
const Login=require('../models/login');
let loginEndPoint="/loginDetails"

/*--------crud for login details-----------*/
router.get(loginEndPoint,(req,res,next)=>{
    Login.find((err,existingCredentials)=>{
       res.json(existingCredentials);
    })
})


router.post(loginEndPoint,(req,res,next)=>{
    //logic to add
    let newLogin=new Login({
        username:req.body.username,
        password:req.body.password
    })
    newLogin.save((err,questionType)=>{
        if(err) {
            res.json({msg:'failed to add login details'});
        }
        else {
            res.json({msg:'login details added successfully'});
        }
    })
  })

  router.delete(loginEndPoint+'/:id',(req,res,next)=>{
    Login.remove({_id:req.params.id},(err,result)=>{
      if(err) {
          res.json(err);
      }
      else {
          res.json(result);
      }
    })
  })

  router.patch(loginEndPoint+'/:id',(req,res,next)=>{
      Login.updateOne({_id:req.params.id},{$set:{
          username:req.body.username,
          password:req.body.password
      }},(err,result)=>{
         if(err) {
          res.json(err)
         }
         else {
          res.json(result);   
         } 
      })
  })

/*----crud for question types-----------------*/

router.get('/questionType',(req,res,next)=>{
    QuestionType.find((err,questionTypes)=>{
       res.json(questionTypes);
    })
})


router.post('/questionType',(req,res,next)=>{
    //logic to add
    let newQuestionType=new QuestionType({
        questionType:req.body.questionType,
    })
    newQuestionType.save((err,questionType)=>{
        if(err) {
            res.json({msg:'failed to add question type'});
        }
        else {
            res.json({msg:'question type added successfully'});
        }
    })
  })

  router.delete('/questionType/:id',(req,res,next)=>{
    QuestionType.remove({_id:req.params.id},(err,result)=>{
      if(err) {
          res.json(err);
      }
      else {
          res.json(result);
      }
    })
  })

  router.patch('/questionType/:id',(req,res,next)=>{
      QuestionType.updateOne({_id:req.params.id},{$set:{
          questionType:req.body.questionType
      }},(err,result)=>{
         if(err) {
          res.json(err)
         }
         else {
          res.json(result);   
         } 
      })
  })
  
/*----crud for question answer-----------------*/

router.get('/questionAnswer',(req,res,next)=>{
    //res.send('retrieving the question answer list');
    QuestionAnswer.find((err,questionAnswerList)=>{
       res.json(questionAnswerList);
    })
})

router.post('/questionAnswer',(req,res,next)=>{
  //logic to add
  let newQuestionAnswer=new QuestionAnswer({
      question:req.body.question,
      answer:req.body.answer,
      questionType:req.body.questionType,
      rank:req.body.rank

  })
   newQuestionAnswer.save((err,questionAnswer)=>{
      if(err) {
          res.json({msg:'failed to add question answer'});
      }
      else {
          res.json({msg:'question answer added successfully'});
      }
  })
})

router.delete('/questionAnswer/:id',(req,res,next)=>{
  QuestionAnswer.remove({_id:req.params.id},(err,result)=>{
    if(err) {
        res.json(err);
    }
    else {
        res.json(result);
    }
  })
})

router.patch('/questionAnswer/:id',(req,res,next)=>{

    QuestionAnswer.updateOne({_id:req.params.id},{$set:{
      question:req.body.question,
      answer:req.body.answer,
      questionType:req.body.questionType,
      rank:req.body.rank
    }},(err,result)=>{
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
  
});

//update question answer

/*----crud for products data-----------------*/

router.get('/product',(req,res,next)=>{
    //res.send('retrieving the question answer list');
    Product.find((err,productList)=>{
       res.json(productList);
    })
})

router.post('/product',(req,res,next)=>{
  //logic to add
  let newProduct=new Product({
    productName:req.body.productName,
    description:req.body.description,
    quantity:req.body.quantity,
    price:req.body.price,
    category: req.body.category,
    price:req.body.price,
    date: req.body.date
  })
   newProduct.save((err,product)=>{
      if(err) {
          res.json({msg:'failed to add product with err:'+ err});
      }
      else {
          res.json({msg:'product added successfully'});
      }
  })
})

router.delete('/product/:id',(req,res,next)=>{
  Product.remove({_id:req.params.id},(err,result)=>{
    if(err) {
        res.json(err);
    }
    else {
        res.json(result);
    }
  })
})

router.patch('/product/:id',(req,res,next)=>{
    Product.updateOne({_id:req.params.id},{$set:{
        productName:req.body.productName,
        description:req.body.description,
        quantity:req.body.quantity,
        price:req.body.price,
        category: req.body.price,
        price:req.body.price,
        date: req.body.date
    }},(err,result)=>{
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
  
});

/* end crud for product data --*/

/*----crud for category data-----------------*/

router.get('/category',(req,res,next)=>{
    //res.send('retrieving the question answer list');
    Category.find((err,categoryList)=>{
       res.json(categoryList);
    })
})

router.post('/category',(req,res,next)=>{
  //logic to add
  let newCategory=new Category({
    categoryName:req.body.categoryName,
  })
   newCategory.save((err,category)=>{
      if(err) {
          res.json({msg:'failed to add category'});
      }
      else {
          res.json({msg:'category added successfully'});
      }
  })
})

router.delete('/category/:id',(req,res,next)=>{
  Category.remove({_id:req.params.id},(err,result)=>{
    if(err) {
        res.json(err);
    }
    else {
        res.json(result);
    }
  })
})

router.patch('/category/:id',(req,res,next)=>{
    Category.updateOne({_id:req.params.id},{$set:{
        categoryName:req.body.categoryName,
    }},(err,result)=>{
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

/* end crud for Category */

module.exports=router;