var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const urlReq = require('url');
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

// All users
router.get('/', function(req, res) {

    MongoClient.connect(url, function(err, client){

        const db = client.db('mean_db');

        if ( err ) {

            console.log( 'Unable to connect to the server!\n', err );

        } else {

            console.log( 'Connected Established!' );
            var collection = db.collection('users');

            collection.find({}).toArray(function(err, result){

                if( err ) {
                    res.send(err);
                } else if( result.length ) {
                    res.render('users', {
                        "users_list": result
                    })
                } else {
                    res.send('No documents found!');
                }

                client.close();
            });

        }
    });

});

module.exports = router;
