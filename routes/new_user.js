var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

var app = express();

router.get('/', function(req, res){
    res.render('new_user', {title: 'Add new user' });
});

module.exports = router;
