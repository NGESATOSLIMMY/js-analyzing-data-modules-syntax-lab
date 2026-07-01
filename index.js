// Import the datejs library
require("datejs"
);

// Create a function to combine users
function combineUsers(...args) {
 // Create an object that will hold the combined users
  const combinedObject = {
    users: [], //Create array to hold users and initialize with empty array
  };



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
  //  Loop through args(argument) one array at a time
  for (const array of args) {
    // Merge the users from current array into users
    combinedObject.users = [
      ...combinedObject.users, //Spread/Keep the exisitng usernames
      ...array, //Add usernames from the current array
    ];
  }
  // Add today's date in the format m/d/yyyy
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Return the combined object
  return combinedObject;
}
