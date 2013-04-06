node-httpstatuscode
===================

to get httpstatuscode from msdn(http://msdn.microsoft.com/zh-cn/library/system.net.httpstatuscode.aspx).

===================

httpStatusCode for node.js. Restfull api must be responsed a goog status. It can use with express.

===================
npm install httpstatuscode

//demo:


var httpStatusCode = require("httpstatuscode").httpStatusCode;

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