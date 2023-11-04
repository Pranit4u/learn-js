const l1data = [
    {title: "Function"},
    {description: "Three ways of defining a function:"},
    {code: "function sum(x, y) {\n    return x + y;\n}"},
    {description: "Above, we created a function named \"sum\", which takes two aurguments, x and y, and returns the addition of x and y."},
    {code: "const sum = function (x, y) {\n  return x + y\n}"},
    {description: "In second case, we created a anonymous (unnamed) function and assigned it to a const variable \"sum\". So now the variable is acting as a function."},
    {description: "Calling a function:"},
    {code: "function sum(x, y) {\n    return x + y;\n}\n\nsum(4,6);"},
    {description: "A function is called when put a parenthesis is put in front of it's name. In the above example, when sum(4,6) is written, the function will invoke and run whatever command is written inside the function.\n In line no 5, we are calling the sum function."},
    {description: "Returning from a function:"},
    {description: "In above code, we were only calling the function. If we want to get some data from the function, we will use the return statement."},
    {code: "function sum(x, y) {\n    return x + y;\n}\n\nvar returnedValueFromFunction = sum(4,6);"},
    {description: "Above, in line no 5, we are not just calling the function, but we are also assigning the function call to a variable named \"returnedValueFromFunction\". Whatever data we return from the function, will be saved in the \"returnedValueFromFunction\" variable. In our case, 10 is returning from the function, so 10 will be saved in the \"returnedValueFromFunction\" variable."},
    {description: "To verify, we can print the value of the variable. PLay around to change the return value t something else!"},
    {coderunner: "function sum(x, y) {\n    return x + y;\n}\n\nvar returnedValueFromFunction = sum(4,6);\nconsole.log(returnedValueFromFunction);"},
    {description: "A fucntion always return something. If you do not eplicitly provide the return statement, it will return \"undefined\"(it's a javascript datatype just like integer, char etc.). For example, the below code will print undefined."},
    {code :"function sum(x, y) {\n    var res = x + y;\n}\n\nvar returnedValueFromFunction = sum(4,6);\nconsole.log(returnedValueFromFunction);"},
    {description: "Above, we did not return anything inside the function, so when we assign the function call to the variable, \"undefined\" is getting stored in the variable."},
    {description: "In a function, if the return statement is written, it will exit the function on the spot. That means, all the lines of code written after the return statement in that function will not get executed."},
    {coderunner: "function sum(x, y) {\n    var res = x + y; return res; const pd = 6*6; console.log(pd);\n}\n\nvar returnedValueFromFunction = sum(4,6);\nconsole.log(returnedValueFromFunction);"},
    {description: "Also, semicolon after end of the line is optional!"}
]

export default l1data