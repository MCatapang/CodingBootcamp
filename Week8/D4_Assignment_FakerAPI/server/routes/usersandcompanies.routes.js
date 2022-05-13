// ------------------------------------------------Classes
class User {
    constructor(userInfo) {
        this.password = userInfo.password;
        this.email = userInfo.email;
        this.phoneNumber = userInfo.phoneNumber;
        this.lastName = userInfo.lastName;
        this.firstName = userInfo.firstName;
        this._id = +new Date();
    }
}
class Company {
    constructor(companyInfo) {
        this._id = +new Date();
        this.name = companyInfo.name;
        this.address = {
            "street": companyInfo.address.street,
            "city": companyInfo.address.city,
            "state": companyInfo.address.state,
            "zipCode": companyInfo.address.zipCode,
            "country": (companyInfo.address.country || "USA")
        }
    }
}


// ------------------------------------------------Export
module.exports = (app, faker) => {
    app.get("/api/users/new", (req, res) => {
        const randomUser = {
            password: faker.internet.password(),
            email: faker.internet.exampleEmail(),
            phoneNumber: faker.phone.phoneNumber(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
        }
        const newUser = new User(randomUser);
        res.json(newUser);
    })

    app.get("/api/companies/new", (req, res) => {
        const randomCompany = {
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.stateAbbr(),
                zipCode: faker.address.zipCodeByState(faker.address.stateAbbr()),
            }
        }
        const newCompany = new Company(randomCompany);
        res.json(newCompany);
    })

    app.get("/api/user/company", (req, res) => {
        const randomUser = {
            password: faker.internet.password(),
            email: faker.internet.exampleEmail(),
            phoneNumber: faker.phone.phoneNumber(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
        }
        const randomCompany = {
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.stateAbbr(),
                zipCode: faker.address.zipCodeByState(faker.address.stateAbbr()),
            }
        }
        const newUser = new User(randomUser);
        const newCompany = new Company(randomCompany);
        const newUserAndCompany = {newUser, newCompany};
        res.json(newUserAndCompany);
    })
}