writeCode

Write code to:-


- create a database named `sports`.

use sports

- list all databases present in local mongod server.

show collections

- create 3 collections named `cricket`, `football`, `TT` in sports databse.

db.createCollection("cricket") db.createCollection("football") db.createCollection("TT")

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.



- list all collections in sports database.
- rename `TT` collection to `tennis`.

db.Cricket.renameCollection("Tennis")

- create a capped collection called `khokho` which should have max 3 documents.



  Try inserting more than 3 and see what happens?

- check whether a collection is capped or not?
- drop all documents from `football` collection.
- delete cricket collection completely.
- delete sports database.
- check which database you are connected to ?
- connect to test database
