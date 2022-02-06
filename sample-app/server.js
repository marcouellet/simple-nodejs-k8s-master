var http = require("http");
var os = require("os");
var hostname = os.hostname();

var qs = require("qs");
var moment = require("moment");

var port = process.env.PORT || 3000;

function handleRequest(request, response) {
  response.end(
    "[" +
      hostname +
      "] Serving requests from simple nodejs k8s master ***dev***. Request URL:" +
      request.url
  );
}

var server = http.createServer(handleRequest);

server.listen(port, function () {
  console.log("My Server is listening on port", port);
});
