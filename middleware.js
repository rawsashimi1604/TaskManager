const express = require('express');
const app = express();

// Global middleware, ran before each controller action
app.use(logger)

app.get('/', (req, res) => {
    console.log("HOME PAGE ENTERED");
    res.send("Home Page");
});

app.get('/users', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`);
    console.log("USERS PAGE ENTERED");
    res.send("Users page");
});

// Middle ware function
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function auth(req, res, next) {
    if (req.query.admin === "true") {
        req.admin = true;
        next();
    } else {
        res.send("No auth");
    }
}

app.listen(3000);