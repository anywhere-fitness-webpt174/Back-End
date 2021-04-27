const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/user-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
    res.json({ api: "These are not the driods you are looking for...." });
});

module.exports = server;