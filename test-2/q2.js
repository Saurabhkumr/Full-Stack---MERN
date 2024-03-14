const http = require("http"); //importing http module
const fs = require("fs").promises; //importing fs module for file handling
const host = "localhost"; //assigning the host to localhost
const port = 8012; //assigning of a port number//
const requestListener = function (req, res) {
  // creating the function which will take request from client and return response
  var url = req.url; //assigning the url to a variable which is received by the client
  fs.readFile("text.txt") //it will read the file from same directory
    .then((contents) => {
      //once the contents is loaded this code will executed
      res.setHeader("Content-Type", "text/plain"); //it will show the content on the web page
      if (url === "/") {
        //if text is a plain text or file then it will display index page by sending plain data
        res.setHeader("Content-Disposition", `inline`); //display the content within the browser window
        res.end(contents); //end the response
      } else if (url === "/Link1") {
        //if url is equal to link1 file then it will send the content in link1 file format
        res.setHeader("Content-Disposition", `attachment;filename=fc.txt`); //it will download fc.txt file
        res.writeHead(200); //display status code is ok
        res.write("This is a content from the browser\n\n"); //writing this content on text file
        res.end(contents.toString().split(" ").reverse().join("")); //reverse the content and displaying on browser
      } else if (url === "/Link2") {
        //if url is equal to link1 file then it will send the content in link1 file format
        let st = contents.toString(); //convert contents of a file into string
        res.write(st);
        const countCh = []; //creating empty array for counting the characters
        for (const chr of st) {
          //loop
          console.log(chr); //print the value of chr
          countCh[chr] = countCh[chr] ? countCh[chr] + 1 : 1; //turnary operator
        }
        console.log(countCh); //diplay the value
        for (let prop in countCh) {
          //loop for object
          res.write(`\n${prop} : ${countCh[prop]}`);
        }
        res.write(st.split("").reverse().join("")); //reverse the string
        res.end(); // end the response
      }
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err); //throw the error
      return;
    });
};
const server = http.createServer(requestListener); //creating the server
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`); //url of server
});
