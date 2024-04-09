const http = require("http"); //importing HTTP module
const fs = require("fs").promises; // importing fs module with promises to handle file operations asynchronously
const host = "localhost"; // defining the hostname
const port = 8048; //defining the port number

// defining the request listener function
const reqListner = function (req, res) {
  var url = req.url; //taking the url from request
  res.setHeader("Content-Type", "text/plain"); //setting the content type to text/plain which is normal text
  if (url === "/") {
    //handling requests for the URL having '/'
    res.write("hello from Node Server\n\n"); //writing the response on the client screen
  } else if (url === "/Link1") {
    //handling requests for the URL having '/Link1'
    res.setHeader("Content-Disposition", `attachment;filename=fc.txt`); //setting the content disposition to download file
    res.writeHead(200); //setting the status code of the response to ok(200)
    res.write("this is a content from the browser-Link1\n\n"); //writing the response on the client screen
  } else if (url === "/Link2") {
    //handling requests for the URL having '/Link2'
    res.write("page link 2"); //writing the response on the client screen
  }
  res.end(); //ending the response
};

const server = http.createServer(reqListner); //created http server to listen
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
}); //printing on the console the link with the port and hostname
