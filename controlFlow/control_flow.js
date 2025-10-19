let userRole = "admin";
let accessLevel;

if (userRole == "admin") {
    accessLevel = "Full access granted";
} else if (userRole == "maneger") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory)

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status: ", authenticationStatus);

let personRole = "enrolled";
let dietaryAccessMessage;

if (personRole === "employee") {
    dietaryAccessMessage = "You have access to Dietary Services";
} else if (personRole === "enrolled") {
    dietaryAccessMessage = "You have full access to Dietary Services and interaction with dietician";
} else if (personRole === "subscriber") {
    dietaryAccessMessage = "You have access to Dietary Services";
} else {
    dietaryAccessMessage = "To get access to Dietary Services, please subscribe or enroll";
}

console.log("Dietary Access Message; ", dietaryAccessMessage)