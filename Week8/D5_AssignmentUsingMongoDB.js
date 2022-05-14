// Open Shell
    mongosh

// Select "my_first_db" database
    use my_first_db

// Create "students" collection in "my_first_db" database
    db.createCollection("students")

// Insert one document in "students" collection
    db.students.insertOne({
        name: "Michael",
        home_state: "CA",
        lucky_number: 4,
        birthday: {
            month: 09,
            day: 04,
            year: 1998
        }
    })

// Insert multiple documents in "students" collection
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
        },
        {
            name: "Selena",
            home_state: "CA",
            lucky_number: 98,
            birthday: {
                month: 02,
                day: 05,
                year: 1990
            }
        },
        {
            name: "John",
            home_state: "AZ",
            lucky_number: 90,
            birthday: {
                month: 10,
                day: 15,
                year: 2000
            }
        },
    ])

// Get all students
    db.students.find()

// Get all students from California
    db.students.find({home_state: "CA"})

// Get all students from Arizona
    db.students.find({home_state: "AZ"})

// Get all students with a lucky number greater than 3
    db.students.find({lucky_number: {$gt: 3}})

// Get all students whose lucky number is <= 10
    db.students.find({lucky_number: {$lte: 10}})

// Get all students whose lucky number is 1<x<9
    db.students.find( {lucky_number: {$gt : 1, $lte: 9}} )

// Add a field to each student collection called 'interests' that is an array
    db.students.updateMany({}, {
        $set: {
            interests: [
                'coding',
                'brunch',
                'MongoDB'
            ]
        }
    })

// Add unique interests for each particular students
    db.students.updateOne(
        {name: 'Michael'},
        {$push: {interests: 'hiking'}}
    )
    db.students.updateOne(
        {name: 'Ryan'},
        {$push: {interests: 'basketball'}}
    )
    db.students.updateOne(
        {name: 'Jonathan'},
        {$push: {interests: 'football'}}
    )
    db.students.updateOne(
        {name: 'Selena'},
        {$push: {interests: 'traveling'}}
    )
    db.students.updateOne(
        {name: 'John'},
        {$push: {interests: 'spiders'}}
    )

// Add the interest 'taxes' into someone's interest array
    db.students.updateOne(
        {name: "Michael"},
        {$push: {interests: 'taxes'}}
    )

// Remove the interest 'taxes' from the previous person's array
    db.students.updateOne(
        {name: "Michael"},
        {$pull: {interests: 'taxes'}}
    )

// Remove all students who are from CA
    db.students.deleteMany({home_state: 'CA'})

// Remove a student by name
    db.students.deleteOne({name: 'John'})

// Remove a student whose lucky number is greater than 5
    db.students.deleteOne({lucky_number: {$gt: 5}})

// Add a field to each student document called 'number_of_belts' and set it equal to '0'
    db.students.updateMany({}, {$set: {number_of_belts: 0}})

// Increment 'number_of_belts' by 1 for all students
    db.students.updateMany({}, {$inc: {number_of_belts: 1}})

// Rename 'number_of_belts' to 'belts_earned'
    db.students.updateMany({}, {$rename: {number_of_belts: "belts_earned"}})

// Remove the lucky number field
    db.students.updateMany({}, {$unset: {lucky_number: 0}})

// Add an "updated_on" field and set the value as the current field
    db.students.updateMany({}, {$set: {updated_on: 0}})
    db.students.updateMany({}, {$currentDate: {updated_on: true}})