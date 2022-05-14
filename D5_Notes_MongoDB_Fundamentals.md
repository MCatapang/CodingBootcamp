# Fundamentals
---
```toc
```
---

## Defining MongoDB
- ==MongoDB==: a NoSQL Database
	- ==NoSQL==: "Not Only SQL"
		- When a database is **NoSQL**, it means that a database does support a structured query langauge (SQL)
		- However, there is more flexibility in the storage of the data other than just basic tabular storage (e.g., MySQL)
		- In a **NoSQL** database, every piece of data is unaware of the other pieces
		- Focuses on speed while having little to no need of relationships between tables
- In **MongoDB** there are no **Joins**
		- Joins are an expensive operation
		- MongoDB focuses on speed
- In **MongoDB** everything is stored as a JSON object
	- This is the reason why MongoDB is a quintessential part of the **MEAN** / **MERN** stack


---

## Comparing Mongo to SQL
- Overall, there are three basic comparisons to make between Mongo and SQL
	1. **Database**: 
		- **Schema** in SQL
		- **Database(db)** in Mongo
	2. **Collection of Related Records**
		- **Tables** in SQL
		- **Collections** in Mongo
	3. **Individual Records in a Collection of Records**
		- **Row/Record** in SQL
		- **Mongo** in Document
- In MongoDB, each **document** (see definition below) is stored as a BSON object
	- ==**BSON**==: Binary JSON, which is friendlier to store 
	- Each document can still be treat as an ordinary JSON object however


---
## Parts of MongoDB; Basic Queries
- In Mongo, a ==**Database**== is the equivalent of an SQL **Schema**
	- Show all databases available on our current MongoDB server
		`show dbs`
	- Show current database selected
		`db`
	- Change to another database
		`use DB_NAME`
		- If the database you're trying to swtich to doesn't exit, Mongo will create a new database and switch to it
	- Delete database currently in use
		`use DB_NAME`
		`db.dropDatabase()`
- In Mongo, a ==**Collection**== is the equivalent of an SQL **Table**
	- Show collections in a MongoDB
		`show collections`
	- Create a new collection in the current database
		`db.createCollection("collection_name")`
	- Destroy a collection
		`db.collection_name.drop()`
- In Mongo, a ==**Document**== is the equivalent of an SQL Row/Record
	- No specific command
- Queries are more **method-based** in Mongo and not **typed syntax** like in regular SQL


---

## CRUD Operations
- **Create** – to insert a document into a collection:
	```mongo
	// Pattern:
	db.COLLECTION_NAME.insertOne({YOUR_JSON_DOCUMENT})  
	
	// Example 1:
	db.ninjas.insertOne({name: "Trey", belt: "black", status: "awesome"})
	
	// Example 2:
	db.students.insertMany([
        {
            name: "Jonathan",
            home_state: "WA",
            lucky_number: 12,
            birthday: {
                month: 02,
                day: 04,
                year: 1995
            }
        },
        {
            name: "Ryan",
            home_state: "CA",
            lucky_number: 1,
            birthday: {
                month: 11,
                day: 29,
                year: 1935
            }
        }
	])
	```
- **Read** – to retrieve documents from a collection
	```mongo
	// Pattern:
	db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT})
	
	// Example 1: 
	db.ninjas.find()
	
	// Example 2:
	db.ninjas.find({name: "Trey"})
	
	// Example 3:
	db.ninjas.find().pretty()
	```
- **Update** – updating documents in a collection
	```mongo
	// Example:
	db.ninjas.updateOne({name: "Trey"}, {location: "Mountain View"})
	```
	- The example operation above finds the first document with the key-value pair of  `name: "Trey"`, and updates the **entire document** to just `{"_id": ObjectId("1241k21j31312k(keyboard-smashed-lol"), "location": "Mountain View"}`
		- MongoDB's native update method will completely overwrite everything except the `_id` field.
	```mongo
	// Pattern:
	db.COLLECTION_NAME.updateOne( {QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS} )
	
	// Example:
	db.ninjas.updateOne( {name: "Trey"}, {$set: {location: "Mountain View"}} )
	```
	- The example above will  change the **first document** with the key-value pair of `name: "Trey"` and update that document's location to **Mountain View**
- **Destroy** – removing documents from a collection
	```mongo
	// Pattern:
	db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)
	
	// Example 1
	db.ninjas.deleteOne({belt: "yellow"})
	```
	- The example above will only delete the first document it finds


---

## Operators
- ==Operator==: allow you to operate on data since queries are **method-based** in Mongo
- Basic operators include:
	- Greater Than (`$gt`)
		- `db.students.find( {lucky_number: {$gt : 1, $lte: 9}} )`
	- Greater Than or Equal To (`$gte`)
		-  `db.students.find( {lucky_number: {$gte: 3}} )`
	- Less Than (`$lt`)
		-  `db.students.find( {lucky_number: {$lt: 9}} )`
	- Less Than or Equal To (`$lte`)
		-  `db.students.find( {lucky_number: {$gt : 1, $lte: 9}} )`
	- In Array (`$in`): used to find documents who have a particular value within an array
		- `db.students.find( {lucky_number: {$in: [1, 5, 15m]}} )`
- Operators with arrays include:
	- Push (`$push`): push to an array contained within an element
	```mongo
	db.students.updateOne(
		{name: 'John'},
		{$push: {interests: 'spiders'}}
	)
	```
	- Pop (`$pop`): removes either the first or last element from an array
		- `db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})`
		- `1` for the last item in the array, `-1` for the first item
	- Add to Set (`$addToSet`): functions just like `$push`, but only adds to the specified array if the value doesn't alread exist (thereby preventing duplicate entries)
	- Pull (`$pull`): removes a specified value from an array, removing the value by location
		- `db.COLLECTION.update( {QUERY}, {$pull: {array_key: VALUE}} )`
		- Removes all instances of value from the documents with the array specified by the `array_key` that match `QUERY`
	- Increment(`$inc`): increments a value by a certain value
		- `db.students.updateMany({}, {$inc: {number_of_belts: 1}})`
	- Rename(`$rename`): renames a key
		- `db.students.updateMany({}, {$rename: {number_of_belts: "belts_earned"}})`