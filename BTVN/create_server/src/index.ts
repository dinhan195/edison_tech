import * as http from "http";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const server = http.createServer(function(req, res) {
  if (req.url === "/home" && req.method === "GET") {
        res.end('Html home');
  }else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});
server.listen(port, function() {
  console.log('Server running at http://127.0.0.1' + ':' + port + '/');
});