
var httpStatusCode = require("httpstatuscode");

var toBeEqual = function (actual,expected){
    if(actual !== expected){
    	throw  (actual + " not equal " + expected);
    }
};

toBeEqual(httpStatusCode.OK,200);
toBeEqual(httpStatusCode.Created,201);
toBeEqual(httpStatusCode.BadRequest,400);
toBeEqual(httpStatusCode.InternalServerError,500);

console.log(httpStatusCode);
console.log("success");