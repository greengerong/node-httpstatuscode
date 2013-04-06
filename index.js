var http = require('http');
var fs = require('fs');
var $ = require('jquery');
var output = "httpStatusCode/index.js";
(function(){
    
    String.format = function() {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }

        return s;
    };

    var options = {
        host:'msdn.microsoft.com',
        port:80,
        path:'/zh-cn/library/system.net.httpstatuscode.aspx'
    };

    http.get(options,function (response) {
        var html = "";
        response.on("data",function (chunk) {
            html += chunk;
        }).on("end", function () {
            handler(html);
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
        });

    function getHttpStatusCode(htmlString) {
        var $doc = $(html);
        var rows = $doc.find("table#memberList tr:gt(0)");
        var status = {};
        rows.each(function(i,row){
            status[$(row).find("td:eq(1)").text()] = 
                parseInt($(row).find("td:eq(2)").text().match(/\d+/).toString());
        });
       return status;
    };
     
    function generateCode(status){
       var code = "";
       code += "exports.httpStatusCode = " + JSON.stringify(status) + ";";
       return code;
    };
    
    function writeFile(code){
        fs.writeFile(output, code, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved " + output + "!");
            }
        }); 
    };

    function handler(html){
       var status = getHttpStatusCode(html);
       var code = generateCode(status);
       writeFile(code);
    };

  });
})();