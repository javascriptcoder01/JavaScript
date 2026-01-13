
// Tight Coupling

class EmailService {
    sendEmail(message) {
        console.log("Email Sent: ", message);
    }
}

class UserService {
    constructor() {
        this.emailService = new EmailService();   // direct dependency
    }

    registerUser(name) {
        console.log("User Registerd: ", name);
        this.emailService.sendEmail("Welcome: ", name);
    }
}

const user = new UserService();
user.registerUser("Neeraj")