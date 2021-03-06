## 🔥 Simple App / NodeJS + MongoDB

![alt text](https://image.prntscr.com/image/viKRTTpaQn2gnDuT934s_g.png)

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

 ### Help links
* https://docs.mongodb.com/manual/tutorial/measure-index-use/index.html
* http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/
* https://www.youtube.com/watch?v=pWbMrx5rVBE
* https://www.youtube.com/watch?v=Do_Hsb_Hs3c
