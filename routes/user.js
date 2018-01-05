var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

var app = express();

// All users
router.get('/', function(req, res) {

    var user_id = req.originalUrl.split('/')[2];

    console.log('user_id: ', user_id);

    MongoClient.connect(url, function(err, client){

        const db = client.db('mean_db');

        if ( err ) {

            console.log( 'Unable to connect to the server!\n', err );
            client.close();

        } else {

            console.log( 'Connected Established!' );

            var collection = db.collection('users');
            collection.find({"_id": ObjectId(user_id)}).toArray(function(err, result){

                if( err ) {
                    res.send(err);
                } else if( result.length ) {
                    res.render('user', {
                        "user_data": result[0]
                    })
                } else {
                    res.send('No USER by ID: ', user_id);
                }

                client.close();
            });


        }
    });

});

module.exports = router;
