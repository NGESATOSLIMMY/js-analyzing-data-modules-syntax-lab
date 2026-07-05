require("datejs");

function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  module.exports = {
    ...(typeof combineUsers !== "undefined" && { combineUsers }),
  };
  for (const array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}
