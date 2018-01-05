const express = require('express');
const router = express.Router();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const urlReq = require('url');
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Application' });
});

/* Add new user */
router.post('/add_user', function(req, res) {

    MongoClient.connect(url, function(err, client){

        const db = client.db('mean_db');

        if ( err ) {

            console.log( 'Unable to connect to the server!\n', err );
            client.close();

        } else {

            console.log( 'Connected Established!' );

            var collection = db.collection('users');

            var new_user = {
                "first_name":   req.body.first_name,
                "last_name":    req.body.last_name,
                "address": {
                    "street":       req.body.street,
                    "city":         req.body.city,
                    "state":        req.body.state
                },
                "gender":       req.body.gender,
                "age":          parseInt(req.body.age),
                "memberships":  [],
                "balance":      parseInt(req.body.balance)
            };

            // Insert the student data into the database
            collection.insert([new_user], function (err, result){

                if( err ) {
                    res.send(err);
                } else {
                    res.redirect("/users");
                }

                client.close();
            });


        }
    });

});

/* Remove user */
router.post('/remove_user', function(req, res) {

    MongoClient.connect(url, function(err, client){

        const db = client.db('mean_db');

        if ( err ) {

            console.log( 'Unable to connect to the server!\n', err );
            client.close();

        } else {

            console.log( 'Connected Established!' );

            var collection = db.collection('users');

            // Insert the student data into the database
            collection.remove({"_id" : ObjectId(req.body.id)}, function (err, result){

                if( err ) {
                    res.send(err);
                } else {
                    res.redirect("/users");
                }

                client.close();
            });


        }
    });

});

module.exports = router;
