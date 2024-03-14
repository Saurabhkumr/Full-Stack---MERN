const http = require("http"); //we are importing http module//
const fs = require("fs").promises; //we are importing fs module//
const host = "localhost"; //importing localhost server/module //
const port = 8030; //assigning of a port number//
const requestListener = function (req, res) {
  // process incoming requests from client//
  var url = req.url; //assigning the url to a variable which is received by the client//
  res.setHeader("Content-Type", "text/plain"); //creating header for the response//
  if (url === "/") {
    //if text is a plain text or file then it will display index page by sending plain data//

    res.write("Hello form Node Server \n\n"); //it will send this messgae to the user if someone is making request//
  } else if (url === "/Link1") {
    //if url is equal to another file that is link1//
    res.setHeader("Content-Disposition", `attachment;filename=fc.txt`); //creating header for the response for link1 file//
    res.writeHead(200); //display status code as ok//
    res.write("This is a content from the browser-Link1\n\n"); //it will write this line to a text file and will display on web browser//
  } else if (url === "/Link2") {
    //if url is equal to another file that is link2//
    res.write("Page Link2"); //write a response for link2 file it will write in this file and will display on web browser
  }
  res.end(); //end of the response//
};
const server = http.createServer(requestListener); //creating a server with a function named - createServer//
server.listen(port, host, () => {
  //asynchronous function - which listens assigning port and host//
  console.log(`Server is running on http://${host}:${port}`); //will print the message on console//
}); //end of asynchronous function//
