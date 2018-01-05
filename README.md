## Simple App / NodeJS + MongoDB

* Install npm dependencies:

    ``> npm install``
    
* Start MongoDB

    ``> mongod --dbpath D:\Server\project\data``

* Start MongoDB Enterprise
 
    ``> mongo``

* Create DataBase
    
    ``> use mean_db``
    
* Create collection in DB mean_db

    ``> db.createCollection("users")``

* Insert docs in collection
    
    ````
    > db.users.insert([
        {
            first_name : "Troy",
            last_name : "Makons",
            gender : "male",
            age : 33,
            address : {
                street : "432 Essex st",
                city : "Lawrence",
                state : "MA"
            },
            memberships : ["mem1", "mem2"],
            balance : 125.32
        },
        {
            first_name : "Beth",
            last_name : "Jenkins",
            gender : "female",
            age : 23,
            address : {
                street : "411 Blue st",
                city : "Boston",
                state : "MA"
            },
            memberships : ["mem2", "mem3"],
            balance : 505.33
        }
    ])
    
* Show users
    
    ``> db.users.find().pretty()``
    
* Start node server
    
    ``> npm run start``

* Run:
    
    ``http://127.0.0.1:3000``