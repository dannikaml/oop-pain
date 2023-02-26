const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 