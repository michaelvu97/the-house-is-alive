const express = require('express');
const task = require('@task-core/task-core')

const app = express();
const port = 3000;

/*
app.get('/', (req, res) => res.send("hello world!"));
app.listen(port, () => console.log("App listening on " + port));
*/

task.printMsg();