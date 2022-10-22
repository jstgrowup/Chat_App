const app = require("express")()
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")
app.use(cors())
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`user with id: ${socket.id} has joined ${data}`);
    })
    socket.on("send_messege", (data) => {
        socket.to(data.curRoom).emit("recieve_messge", data)
        // console.log(data);
    })
    socket.on("disconnect", () => {
        console.log("user disconnected");
    })
})
server.listen(8080, () => console.log("server started"))