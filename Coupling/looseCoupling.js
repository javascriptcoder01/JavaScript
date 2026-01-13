// Step 1: Abstraction Banao (Interface Style)
class NotificationService {
    send(message) {
        throw new Error("send() must be implemented");
    }
}

// Step 2: Concrete Implementation
class EmailService extends NotificationService {
    send(message) {
        console.log(`Emial Sent :  ${message}`);
    }
}

class SMSService extends NotificationService {
    send(message) {
        console.log(`SMS sent: ${message}`);
    }
}

class WhatsappService extends NotificationService {
    send(message) {
        console.log(`Whatsapp message sent: ${message}`);
    }
}

// Step 3: Dependency Injection - Use Abstraction (Loose Coupling)

// Solution 1
function notifyUser(service, message) {
    service.send(message);
}

// Solution 2
class UserService {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    send(message) {
        console.log("User registered", message);
        this.notificationService.send("Welcome to " + message);
    }


}

// Create Object and Call
const email = new EmailService();
const SMS = new SMSService();
const whatsapp = new WhatsappService();

notifyUser(email, "Hii");
notifyUser(SMS, "Hii");
notifyUser(whatsapp, "Hii");

// Solution 2
// const user = new UserService(email);
// const user = new UserService(SMS);
const user = new UserService(whatsapp);

user.send("Neeraj");


