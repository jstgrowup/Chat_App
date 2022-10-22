const httpServer = require("http").createServer()
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*"
    }
})
httpServer.listen(8080, () => console.log("server started"))