let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel ="Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel ="No access granted";
}


console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "Please log in to access the system.";
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
        break;
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticated = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);


let programRole  = "Enrolled Member";
let accessMessage;

if (programRole  === "employ"){
    accessMessage = "You are authorized to access the Dietary Services.";
} else if (programRole  === "Enrolled Member") {
    accessMessage = "You are authorized to access the Dietary Services and have one-on-one interaction with a dietician.";
}
else if (programRole  === "Subscriber") {
    accessMessage = "You have partial access to the Dietary Services.";
}
else if (programRole  === "Non-Subscriber") {
    accessMessage = "Please enroll or subscribe first to access the Dietary Services.";
} else {
    accessMessage = "Invalid role provided. Please contact the administrator.";
}

console.log("Dietary Services Access:");
console.log(accessMessage);