function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

