// We will imitate a database with this array
let users = [
  {
    name: "User 1",
    email: "user1@gmail.com",
    password: "user1pass",
  },
];

// This function executes when the signup form is submitted
document.getElementById("signupform").addEventListener("submit", (event) => {
  event.preventDefault();
  // TODO: get the value from the signup form (JS DOM)
  // 1- check if user exists or not and stop the function in case they do (by returning)
  // 2- if they don't exist we need to add teh user to the array (use 2 methods for this one and comment the first one)
  alert("Signup");
});

// This function executes when the login form is submitted
const login = (event) => {
  event.preventDefault();
  // TODO: get the value from the login form (JS DOM)
  // TODO: instead of alerting we want to do the following
  // 1- check if user exists or not and stop the function in case they don't (by returning)
  // We already have a function that checks the user. Use it and wait for it before going forward
  // 2- if they exist we need to compare the passwords
  // 3- if the password is correct we will alert that the login is successful
  alert("Login");
};
document.getElementById("loginform").addEventListener("submit", login);

// TODO: Modify this function to return either null if the user was not found or the user object in case they exist
// TODO: This function should return a promise and resolves the user or rejects null
function getUserFromDatabase(email) {
  // This function will be executed after 2000ms (2 seconds)
  setTimeout(() => {
    // TODO: Getting user from database (user array)
  }, 2000);
}
