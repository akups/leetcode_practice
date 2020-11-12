const myPow = function (x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result = result * x;
  }
  return result;
};

console.log(myPow(2, 3));
console.log(myPow(3, 3));

const isValid = function (s) {
  //create a stack
  let myStack = [];
  //loop through every element of the string
  for (let i = 0; i < s.length; i++) {
    let char = myStack[myStack.length - 1];
    // if opening parenthesis is found push to stack
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      myStack.push(s[i]);
      // if corresponding closing parenthesis for the opening ones are found pop the opening ones out of stack
    } else if (
      (char == "(" && s[i] == ")") ||
      (char == "{" && s[i] == "}") ||
      (char == "[" && s[i] == "]")
    ) {
      myStack.pop();
    } else return false;
  }
  //if each opening has acorresponding closing parenthesis then the stack should empty after the iteration
  return myStack.length ? false : true;
};
